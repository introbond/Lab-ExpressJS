const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());
const port = 3000;

const connection = mysql.createConnection({
    host : `127.0.0.1`,
    user : `root`,
    password : ``,
    database : `mylittleshowroom`,
    port : `3306`  
})
connection.connect((error) => {
    if (error) {
        console.log(`Database connection error : ${error}`)
    } else {
        console.log(`Database connection established`)
    }
})

// Solution for question number 3.1
app.get(`/read/sales_history/:car_brand/:date_start/:date_end`, async (req, res) => {
    const {car_brand, date_start, date_end} = req.params
    try {
        connection.query(`SELECT * FROM sales_history WHERE (car_brand = '${car_brand}') AND date BETWEEN '${date_start}' AND '${date_end}'`,
        (error, results, fields) => {
            if (error) {
                console.log(error)
                return res.status(400).send()
            } else {
                return res.status(200).json(results)
            }
        })
    } catch(error) {
        console.log(error)
        return res.status(500).send()
    }
})

// Solution for question number 3.2
app.get(`/read/sales_history/:car_brand/:car_model/:date_start/:date_end`, async (req, res) => {
    const {car_brand, car_model, date_start, date_end} = req.params
    try {
        connection.query(`SELECT * FROM sales_history WHERE (car_brand = '${car_brand}') AND (car_model = '${car_model}') AND date BETWEEN '${date_start}' AND '${date_end}'`,
        (error, results, fields) => {
            if (error) {
                console.log(error)
                return res.status(400).send()
            } else {
                return res.status(200).json(results)
            }
        })
    } catch(error) {
        console.log(error)
        return res.status(500).send()
    }
})

// Solution for question number 3.3
app.get(`/read/sales_history/:car_brand/:car_model/:staff_id/:date_start/:date_end`, async (req, res) => {
    const {car_brand, car_model, staff_id, date_start, date_end} = req.params
    try {
        connection.query(`SELECT * FROM sales_history WHERE (car_brand = '${car_brand}') AND (car_model = '${car_model}') AND (staff_id = '${Number(staff_id)}') AND date BETWEEN '${date_start}' AND '${date_end}'`,
        (error, results, fields) => {
            if (error) {
                console.log(error)
                return res.status(400).send()
            } else {
                return res.status(200).json(results)
            }
        })
    } catch(error) {
        console.log(error)
        return res.status(500).send()
    }
})

// Solution for question number 3.4
app.post(`/create/sales_history`, async (req, res) => {
    const {staff_id, car_brand, car_model} = req.body
    try {
        connection.query(
            `INSERT INTO sales_history (staff_id, car_brand, car_model) VALUES (
            (SELECT id FROM staff WHERE id = '${Number(staff_id)}'), 
            (SELECT brand FROM cars WHERE brand = '${car_brand}' AND model = '${car_model}'),
            (SELECT model FROM cars WHERE brand = '${car_brand}' AND model = '${car_model}')
            )`,
            (error, results, fields) => {
                if (error) {
                    console.log(error)
                    return res.status(400).send()
                } else {
                    return res.status(201).json({ message: `Recorded success: Staff ID = ${Number(staff_id)}, Brand = ${car_brand}, Model = ${car_model}`})
                }   
            }
        )
    } catch(error) {
        console.log(error)
        return res.status(500).send()
    }
})

// Solution for question number 3.5.1
app.post(`/create/car_model`, async (req, res) => {
    const {car_brand, car_model, car_description} = req.body
    try {
        connection.query(
            `INSERT INTO cars(brand, model, description) VALUES('${car_brand}', '${car_model}', '${car_description}')`,
            (error, results, fields) => {
                if (error) {
                    console.log(error)
                    return res.status(400).send()
                } else {
                    return res.status(201).json({ message: `Recorded success: Car Brand = ${car_brand}, Car Model = ${car_model}, Car Description = ${car_description}`})
                }
            }
        )
    } catch(error) {
        console.log(error)
        return res.status(500).send()
    }
})

// Solution for question number 3.5.2
app.patch(`/update/car_model`, async (req, res) => {
    const {car_brand, car_model_old, car_model_new} = req.body
    try {
        connection.query(`UPDATE cars SET model = '${car_model_new}'
        WHERE (SELECT brand FROM cars WHERE brand = '${car_brand}' AND model = '${car_model_old}') 
        AND (SELECT model FROM cars WHERE brand = '${car_brand}' AND model = '${car_model_old}')`,
        (error, results, fields) => {
            if (error) {
                    console.log(error)
                return res.status(400).send()
            } else {
                return res.status(200).json({message: `Updated success: Car Brand = ${car_brand}, Old Model = ${car_model_old}, New Model = ${car_model_new}`})
            }
        })
    } catch(error) {
        console.log(error);
        return res.status(500).send()
    }
})

app.listen(port, () => console.log(`Server is running on port : ${port}`))