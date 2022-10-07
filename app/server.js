const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());
const port = 3000;

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'mylittleshowroom',
    port : '3306'  
})

connection.connect((error) => {
    if (error) {
        console.log('Database connection error : ' + error)
    } else {
        console.log('Database connection established')
    }
})

app.get("/read", async (req, res) => {
    try {
        connection.query("SELECT * FROM cars", (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

app.get("/read/:car_brand/:dateStart/:dateEnd/", async (req, res) => {
    const car_brand = req.params.car_brand
    const dateStart = req.params.dateStart
    const dateEnd = req.params.dateEnd
    try {
        connection.query("SELECT * FROM sales_history WHERE (car_brand = ?) AND date BETWEEN ? AND ?", [car_brand, dateStart, dateEnd], (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

app.get("/read/:car_brand/:car_model/:dateStart/:dateEnd/", async (req, res) => {
    const car_brand = req.params.car_brand
    const car_model = req.params.car_model
    const dateStart = req.params.dateStart
    const dateEnd = req.params.dateEnd
    try {
        connection.query("SELECT * FROM sales_history WHERE (car_brand = ?) AND (car_model = ?) AND date BETWEEN ? AND ?", [car_brand, car_model, dateStart, dateEnd], (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

app.get("/read/:staff_id/:car_brand/:car_model/:dateStart/:dateEnd/", async (req, res) => {
    const staff_id = req.params.staff_id
    const car_brand = req.params.car_brand
    const car_model = req.params.car_model
    const dateStart = req.params.dateStart
    const dateEnd = req.params.dateEnd
    try {
        connection.query("SELECT * FROM sales_history WHERE (staff_id = ?) AND (car_brand = ?) AND (car_model = ?) AND date BETWEEN ? AND ?", [staff_id, car_brand, car_model, dateStart, dateEnd], (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

app.listen(port, () => console.log('Server is running on port : ' + port))