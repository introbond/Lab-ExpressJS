SELECT
    *
FROM
    `sales_history`
WHERE
	`car_brand` = "Honda" AND (`date` BETWEEN "2022-06-01" AND "2022-06-15");