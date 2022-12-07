const config = require("./config.json");
const mysql = require("mysql");
const e = require("express");

// TODO: fill in your connection details here
const connection = mysql.createConnection({
  host: config.rds_host,
  user: config.rds_user,
  password: config.rds_password,
  port: config.rds_port,
  database: config.rds_db,
});
connection.connect();

// ********************************************
//            SIMPLE ROUTE EXAMPLE
// ********************************************

// Route 1 (handler)
async function hello(req, res) {
  // a GET request to /hello?name=Steve
  if (req.query.name) {
    res.send(`Hi, ${req.query.name}! Welcome to the Oeda Platform!`);
  } else {
    res.send(`Hi! Welcome to the Oeda Platform!`);
  }
}

// ********************************************
//                  DASHBOARD
// ********************************************

// Route 2 (handler)
async function yearly_order(req, res) {
  var year = req.query.year ? req.query.year : "2018";
  connection.query(
    `WITH TEMP1 AS (SELECT COUNT(order_id) AS order_2016
    FROM OrderInfo
    WHERE order_purchase_year = 2016),
TEMP2 AS (SELECT COUNT(order_id) AS order_2017
    FROM OrderInfo
    WHERE order_purchase_year = 2017),
TEMP3 AS (SELECT COUNT(order_id) AS order_2018
    FROM OrderInfo
    WHERE order_purchase_year = 2018)
SELECT
    order_2016, null AS difference_2015_2016,
    order_2017, concat(round(((order_2017 - order_2016)/order_2016)*100,2),'%') AS difference_2016_2017,
    order_2018,concat(round(((order_2018 - order_2017)/order_2017)*100, 2),'%') AS difference_2017_2018
FROM TEMP1 NATURAL JOIN TEMP2 NATURAL JOIN TEMP3`,
    function (error, results, fields) {
      if (error) {
        res.json({ error: error });
      } else {
        const firstfields = ["order_2016", "difference_2015_2016"];
        const secondfields = ["order_2017", "difference_2016_2017"];
        const thirdfields = ["order_2018", "difference_2017_2018"];
        if (year == 2016) {
          secondfields.forEach((attribute) => {
            delete results[0][attribute];
          });
          thirdfields.forEach((attribute) => {
            delete results[0][attribute];
          });
        } else if (year == 2017) {
          firstfields.forEach((attribute) => {
            delete results[0][attribute];
          });
          thirdfields.forEach((attribute) => {
            delete results[0][attribute];
          });
        } else {
          firstfields.forEach((attribute) => {
            delete results[0][attribute];
          });
          secondfields.forEach((attribute) => {
            delete results[0][attribute];
          });
        }

        res.json({ results: results });
      }
    }
  );
}

async function yearly_sales(req, res) {
  var year = req.query.year ? req.query.year : "2018";
  connection.query(
    `WITH TEMP1 AS (SELECT round(SUM(Payment_value),2) AS sales_2016
    FROM Payment NATURAL JOIN OrderInfo
    WHERE order_purchase_year = 2016),
TEMP2 AS (SELECT round(SUM(Payment_value),2) AS sales_2017
    FROM Payment NATURAL JOIN OrderInfo
    WHERE order_purchase_year = 2017),
TEMP3 AS (SELECT round(SUM(Payment_value),2) AS sales_2018
    FROM Payment NATURAL JOIN OrderInfo
    WHERE order_purchase_year = 2018)
SELECT sales_2016, null AS difference_2015_2016, sales_2017,
       concat(round(((sales_2017 - sales_2016)/sales_2016)*100,2),'%') AS difference_2016_2017, sales_2018,
concat(round((sales_2018 - sales_2017)/sales_2017*100,2),'%')AS difference_2017_2018
FROM TEMP1 NATURAL JOIN TEMP2 NATURAL JOIN TEMP3`,
    function (error, results, fields) {
      if (error) {
        res.json({ error: error });
      } else {
        const firstfields = ["sales_2016", "difference_2015_2016"];
        const secondfields = ["sales_2017", "difference_2016_2017"];
        const thirdfields = ["sales_2018", "difference_2017_2018"];
        if (year == 2016) {
          secondfields.forEach((attribute) => {
            delete results[0][attribute];
          });
          thirdfields.forEach((attribute) => {
            delete results[0][attribute];
          });
        } else if (year == 2017) {
          firstfields.forEach((attribute) => {
            delete results[0][attribute];
          });
          thirdfields.forEach((attribute) => {
            delete results[0][attribute];
          });
        } else {
          firstfields.forEach((attribute) => {
            delete results[0][attribute];
          });
          secondfields.forEach((attribute) => {
            delete results[0][attribute];
          });
        }

        res.json({ results: results });
      }
    }
  );
}
async function yearly_review(req, res) {
  var year = req.query.year ? req.query.year : "2018";
  connection.query(
    `WITH TEMP1 AS (SELECT round(AVG(review_score),2) AS review_2017
    FROM Review NATURAL JOIN OrderInfo
    WHERE order_purchase_year = 2017),
TEMP2 AS (SELECT round(AVG(review_score),2) AS review_2018
    FROM Review NATURAL JOIN OrderInfo
    WHERE order_purchase_year = 2018)
SELECT review_2017, null AS difference_2016_2017, review_2018,
concat(round(((review_2018 - review_2017)/review_2017)*100,2),'%') AS difference_2017_2018
FROM TEMP1 NATURAL JOIN TEMP2;`,
    function (error, results, fields) {
      if (error) {
        res.json({ error: error });
      } else {
        const secondfields = ["review_2017", "difference_2016_2017"];
        const thirdfields = ["review_2018", "difference_2017_2018"];
        if (year == 2017) {
          thirdfields.forEach((attribute) => {
            delete results[0][attribute];
          });
        } else {
          secondfields.forEach((attribute) => {
            delete results[0][attribute];
          });
        }

        res.json({ results: results });
      }
    }
  );
}

async function yearly_state(req, res) {
  var year = req.query.year ? req.query.year : "2018";
  connection.query(
    `WITH TEMP1 AS (SELECT COUNT(DISTINCT customer_state) AS state_2016
    FROM Customer NATURAL JOIN OrderInfo
    WHERE order_purchase_year = 2016),
TEMP2 AS (SELECT COUNT(DISTINCT customer_state) AS state_2017
    FROM Customer NATURAL JOIN OrderInfo
    WHERE order_purchase_year = 2017),
TEMP3 AS (SELECT COUNT(DISTINCT customer_state) AS state_2018
    FROM Customer NATURAL JOIN OrderInfo
    WHERE order_purchase_year = 2018)
SELECT state_2016, null AS difference_2015_2016,
       state_2017, concat(round(((state_2017 - state_2016)/state_2016)*100,2),'%') AS difference_2016_2017,
       state_2018, concat(round(((state_2018 - state_2017)/state_2017)*100,2),'%') AS difference_2017_2018
FROM TEMP1 NATURAL JOIN TEMP2 NATURAL JOIN TEMP3;`,
    function (error, results, fields) {
      if (error) {
        res.json({ error: error });
      } else {
        const firstfields = ["state_2016", "difference_2015_2016"];
        const secondfields = ["state_2017", "difference_2016_2017"];
        const thirdfields = ["state_2018", "difference_2017_2018"];
        if (year == 2016) {
          secondfields.forEach((attribute) => {
            delete results[0][attribute];
          });
          thirdfields.forEach((attribute) => {
            delete results[0][attribute];
          });
        } else if (year == 2017) {
          firstfields.forEach((attribute) => {
            delete results[0][attribute];
          });
          thirdfields.forEach((attribute) => {
            delete results[0][attribute];
          });
        } else {
          firstfields.forEach((attribute) => {
            delete results[0][attribute];
          });
          secondfields.forEach((attribute) => {
            delete results[0][attribute];
          });
        }

        res.json({ results: results });
      }
    }
  );
}

// ********************************************
//               ANALYTICS
// ********************************************

async function search(req, res) {
  var category = req.query.category ? req.query.category : "";
  var low = req.query.low ? req.query.low : 0;
  var high = req.query.high ? req.query.high : 10000000;
  var year = req.query.year ? req.query.year : "";
  var month = req.query.month ? req.query.month : "";

  connection.query(
    `SELECT customer_id AS id, order_id, price, product_category_name_english AS category, order_purchase_year AS year,
    order_purchase_month AS month, review_score, customer_city
 FROM Customer NATURAL JOIN Review NATURAL JOIN OrderInfo
 NATURAL JOIN Product NATURAL JOIN Category NATURAL JOIN Item
 WHERE product_category_name_english LIKE '%${category}%'
 AND price > ${low} AND price < ${high} AND order_purchase_year LIKE '%${year}%' AND order_purchase_month LIKE '%${month}%'`,
    function (error, results, fields) {
      if (error) {
        res.json({ error: error });
      } else if (results) {
        res.json({ results: results });
      }
    }
  );
}

// ********************************************
//             MARKET ANALYSIS ROUTES
// ********************************************

async function all_market(req, res) {
  var year = req.query.year ? req.query.year : "";
  connection.query(
    `WITH top_cities
    AS (SELECT city, walmart
        FROM City
        ORDER BY walmart DESC
        LIMIT 5),
 orders_products
    AS (SELECT O.order_id,
            O.order_deliver_customer_year AS year,
            C.customer_id,
            C.customer_city AS city,
            P.product_id,
            P.product_category_name,
            I.price
        FROM OrderInfo O
        JOIN Item I ON O.order_id = I.order_id
        JOIN Product P ON I.product_id = P.product_id
        JOIN Customer C ON O.customer_id = C.customer_id),
total_orders AS (SELECT city, year, COUNT(DISTINCT order_id) AS count
        FROM orders_products
        WHERE city IN (SELECT city FROM top_cities)
        GROUP BY city, year),
total_sales
    AS (SELECT city, year, SUM(price) AS sales
        FROM orders_products
        WHERE city IN (SELECT city FROM top_cities)
        GROUP BY city, year),
top_product
    AS (SELECT city, year, c.product_category_name_english, SUM(price) AS sales
        FROM orders_products op
        JOIN Category c ON c.product_category_name = op.product_category_name
        WHERE city IN (SELECT city FROM top_cities)
        GROUP BY city, year, c.product_category_name_english)
SELECT tc.city AS City,
    tc.walmart AS 'Number of Walmart Stores',
    tto.year AS Year,
    tto.count AS 'Number of Orders',
    ts.sales AS Sales,
    tp.product_category_name_english AS 'Top Selling Product'
FROM top_cities tc
NATURAL JOIN total_orders tto
NATURAL JOIN total_sales ts
JOIN top_product tp ON tc.city = tp.city
WHERE tto.year = tp.year AND tto.year LIKE '%${year}' AND tp.sales >= ALL (SELECT sales
                                           FROM top_product tp
                                           WHERE tp.city = tc.city
                                           AND tp.year = tto.year)
ORDER BY tc.walmart DESC, tto.year`,
    function (error, results, fields) {
      if (error) {
        res.json({ error: error });
      } else if (results) {
        res.json({ results: results });
      }
    }
  );
}

// Route 5 (handler)
async function market(req, res) {
  var city = req.query.city ? req.query.city : "";
  var year = req.query.year ? req.query.year : "";
  connection.query(
    `WITH top_cities
    AS (SELECT city, walmart
        FROM City
        ORDER BY walmart DESC
        LIMIT 5),
 orders_products
    AS (SELECT O.order_id,
            O.order_deliver_customer_year AS year,
            C.customer_id,
            C.customer_city AS city,
            P.product_id,
            P.product_category_name,
            I.price
        FROM OrderInfo O
        JOIN Item I ON O.order_id = I.order_id
        JOIN Product P ON I.product_id = P.product_id
        JOIN Customer C ON O.customer_id = C.customer_id),
total_orders AS (SELECT city, year, COUNT(DISTINCT order_id) AS count
        FROM orders_products
        WHERE city IN (SELECT city FROM top_cities)
        GROUP BY city, year),
total_sales
    AS (SELECT city, year, SUM(price) AS sales
        FROM orders_products
        WHERE city IN (SELECT city FROM top_cities)
        GROUP BY city, year),
top_product
    AS (SELECT city, year, c.product_category_name_english, SUM(price) AS sales
        FROM orders_products op
        JOIN Category c ON c.product_category_name = op.product_category_name
        WHERE city IN (SELECT city FROM top_cities)
        GROUP BY city, year, c.product_category_name_english)
SELECT tc.city AS City,
    tc.walmart AS 'Number of Walmart Stores',
    tto.year AS Year,
    tto.count AS 'Number of Orders',
    ts.sales AS Sales,
    tp.product_category_name_english AS 'Top Selling Product'
FROM top_cities tc
NATURAL JOIN total_orders tto
NATURAL JOIN total_sales ts
JOIN top_product tp ON tc.city = tp.city
WHERE tto.year = tp.year AND tto.year LIKE '%${year}%' AND tc.City LIKE '%${city}%' AND tp.sales >= ALL (SELECT sales
                                           FROM top_product tp
                                           WHERE tp.city = tc.city
                                           AND tp.year = tto.year)
ORDER BY tc.walmart DESC, tto.year`,
    function (error, results, fields) {
      if (error) {
        res.json({ error: error });
      } else if (results) {
        res.json({ results: results });
      }
    }
  );
}

// ********************************************
//            Product Review ROUTES
// ********************************************

// Route 6 (handler)
async function all_review(req, res) {
  connection.query(
    `WITH temp
	AS (SELECT R.review_id AS review_id,
		   R.review_score AS review_score,
		   P.product_id AS product_id,
		   C.product_category_name_english AS product_category
	FROM Review R
	JOIN Item I
	ON I.order_id = R.order_id
	JOIN Product P
	ON P.product_id = I.product_id
	JOIN Category C
	ON C.product_category_name = P.product_category_name),
    temp2 AS (SELECT product_category,
AVG(review_score) AS avg_review_score,
STDDEV(review_score) AS std_dev_review_score,
COUNT(*) AS review_num
FROM temp
GROUP BY product_category
HAVING COUNT(*) > 3
ORDER BY avg_review_score DESC, std_dev_review_score ASC
LIMIT 10)
SELECT product_category AS productCategory, ROUND(avg_review_score, 2) AS ReviewScore
FROM temp2
`,
    function (error, results, fields) {
      if (error) {
        res.json({ error: error });
      } else if (results) {
        res.json({ results: results });
      }
    }
  );
}

async function review(req, res) {
  var category = req.query.category ? req.query.category : "home appliances";
  connection.query(
    `WITH temp
	AS (SELECT R.review_id AS review_id,
		   R.review_score AS review_score,
		   P.product_id AS product_id,
		   C.product_category_name_english AS product_category
	FROM Review R
	JOIN Item I
	ON I.order_id = R.order_id
	JOIN Product P
	ON P.product_id = I.product_id
	JOIN Category C
	ON C.product_category_name = P.product_category_name)
SELECT product_category,
AVG(review_score) AS avg_review_score,
STDDEV(review_score) AS std_dev_review_score,
COUNT(*) AS review_num
FROM temp
WHERE product_category = '${category}'
GROUP BY product_category
HAVING COUNT(*) > 3
ORDER BY avg_review_score DESC, std_dev_review_score ASC
LIMIT 10`,
    function (error, results, fields) {
      if (error) {
        res.json({ error: error });
      } else if (results) {
        res.json({ results: results });
      }
    }
  );
}

// ********************************************
//            Payment Habit ROUTES
// ********************************************

// Route 6 (handler)
async function all_habit(req, res) {
  var page = 0;
  var pagesize = 10;
  if (!isNaN(req.query.page)) {
    page = (req.query.page - 1) * 10;
  }
  if (!isNaN(req.query.pagesize)) {
    pagesize = req.query.pagesize;
  }
  if (req.query.page && !isNaN(req.query.page)) {
    connection.query(
      `WITH TEMP1
    AS (SELECT customer_state, SUM(payment_value) AS total_payment_credit,
               AVG(payment_value) AS avg_payment_credit,
               MIN(payment_value) AS min_payment_credit,
               MAX(payment_value) AS max_payment_credit
          FROM Item
                   NATURAL JOIN Product
                   NATURAL JOIN OrderInfo
                   NATURAL JOIN Payment
                   NATURAL JOIN Customer
          WHERE payment_type     = 'credit_card'
          GROUP BY customer_state),
  TEMP2
    AS (SELECT customer_state, SUM(payment_value) as total_payment_boleto,
               AVG(payment_value) AS avg_payment_boleto,
               MIN(payment_value) AS min_payment_boleto,
               MAX(payment_value) AS max_payment_boleto
          FROM Item
                   NATURAL JOIN Product
                   NATURAL JOIN OrderInfo
                   NATURAL JOIN Payment
                   NATURAL JOIN Customer
          WHERE payment_type = 'boleto'
          GROUP BY customer_state)
  
  SELECT DISTINCT customer_state,
       ROUND((total_payment_credit - total_payment_boleto), 2) AS total_paydiff,
       ROUND((avg_payment_credit - avg_payment_boleto), 2) AS avg_paydiff,
       ROUND((max_payment_credit - max_payment_boleto), 2) AS max_paydiff,
       ROUND((min_payment_credit - min_payment_boleto), 2) AS min_paydiff
  FROM TEMP1 NATURAL JOIN TEMP2
  ORDER BY total_paydiff DESC
  LIMIT ${page}, ${pagesize}`,
      function (error, results, fields) {
        if (error) {
          res.json({ error: error });
        } else if (results) {
          res.json({ results: results });
        }
      }
    );
  } else {
    connection.query(
      `WITH TEMP1
    AS (SELECT customer_state, SUM(payment_value) AS total_payment_credit,
               AVG(payment_value) AS avg_payment_credit,
               MIN(payment_value) AS min_payment_credit,
               MAX(payment_value) AS max_payment_credit
          FROM Item
                   NATURAL JOIN Product
                   NATURAL JOIN OrderInfo
                   NATURAL JOIN Payment
                   NATURAL JOIN Customer
          WHERE payment_type     = 'credit_card'
          GROUP BY customer_state),
  TEMP2
    AS (SELECT customer_state, SUM(payment_value) as total_payment_boleto,
               AVG(payment_value) AS avg_payment_boleto,
               MIN(payment_value) AS min_payment_boleto,
               MAX(payment_value) AS max_payment_boleto
          FROM Item
                   NATURAL JOIN Product
                   NATURAL JOIN OrderInfo
                   NATURAL JOIN Payment
                   NATURAL JOIN Customer
          WHERE payment_type = 'boleto'
          GROUP BY customer_state)
  
  SELECT DISTINCT customer_state,
       ROUND((total_payment_credit - total_payment_boleto), 2) AS total_paydiff,
       ROUND((avg_payment_credit - avg_payment_boleto), 2) AS avg_paydiff,
       ROUND((max_payment_credit - max_payment_boleto), 2) AS max_paydiff,
       ROUND((min_payment_credit - min_payment_boleto), 2) AS min_paydiff
  FROM TEMP1 NATURAL JOIN TEMP2
  ORDER BY total_paydiff DESC`,
      function (error, results, fields) {
        if (error) {
          res.json({ error: error });
        } else if (results) {
          res.json({ results: results });
        }
      }
    );
  }
}

async function habit(req, res) {
  var state = req.query.state ? req.query.state : "";
  connection.query(
    `WITH TEMP1
    AS (SELECT customer_state, SUM(payment_value) AS total_payment_credit,
               AVG(payment_value) AS avg_payment_credit,
               MIN(payment_value) AS min_payment_credit,
               MAX(payment_value) AS max_payment_credit
          FROM Item
                   NATURAL JOIN Product
                   NATURAL JOIN OrderInfo
                   NATURAL JOIN Payment
                   NATURAL JOIN Customer
          WHERE payment_type     = 'credit_card'
          GROUP BY customer_state),
  TEMP2
    AS (SELECT customer_state, SUM(payment_value) as total_payment_boleto,
               AVG(payment_value) AS avg_payment_boleto,
               MIN(payment_value) AS min_payment_boleto,
               MAX(payment_value) AS max_payment_boleto
          FROM Item
                   NATURAL JOIN Product
                   NATURAL JOIN OrderInfo
                   NATURAL JOIN Payment
                   NATURAL JOIN Customer
          WHERE payment_type = 'boleto'
          GROUP BY customer_state)
  
  SELECT DISTINCT customer_state,
       ROUND((total_payment_credit - total_payment_boleto), 2) AS total_paydiff,
       ROUND((avg_payment_credit - avg_payment_boleto), 2) AS avg_paydiff,
       ROUND((max_payment_credit - max_payment_boleto), 2) AS max_paydiff,
       ROUND((min_payment_credit - min_payment_boleto), 2) AS min_paydiff
  FROM TEMP1 NATURAL JOIN TEMP2
  WHERE customer_state LIKE '%${state}%'
  ORDER BY total_paydiff DESC`,
    function (error, results, fields) {
      if (error) {
        res.json({ error: error });
      } else if (results) {
        res.json({ results: results });
      }
    }
  );
}

async function transaction(req, res) {
  connection.query(
    `SELECT order_id, customer_id, order_purchase_timestamp, Payment_value
    FROM Payment NATURAL JOIN OrderInfo
    ORDER BY order_purchase_timestamp DESC
    LIMIT 10;`,
    function (error, results, fields) {
      if (error) {
        res.json({ error: error });
      } else if (results) {
        res.json({ results: results });
      }
    }
  );
}
async function top_order(req, res) {
  var year = req.query.year ? req.query.year : "";
  connection.query(
    `SELECT product_category_name_english AS x,
      COUNT(order_id) AS y
 FROM Product NATURAL JOIN Item NATURAL JOIN Category NATURAL JOIN OrderInfo
 WHERE order_purchase_year LIKE '%${year}'
 GROUP BY product_category_name
 Order BY y DESC
 LIMIT 10;`,
    function (error, results, fields) {
      if (error) {
        res.json({ error: error });
      } else if (results) {
        res.json({ results: results });
      }
    }
  );
}

async function top_sales(req, res) {
  var year = req.query.year ? req.query.year : "";
  connection.query(
    `SELECT product_category_name_english AS x,
      round(SUM(price), 2) AS y
 FROM Product NATURAL JOIN Item NATURAL JOIN Category NATURAL JOIN OrderInfo
 WHERE order_purchase_year LIKE '%${year}'
 GROUP BY product_category_name
 Order BY y DESC
 LIMIT 10;`,
    function (error, results, fields) {
      if (error) {
        res.json({ error: error });
      } else if (results) {
        res.json({ results: results });
      }
    }
  );
}

async function top_review(req, res) {
  var year = req.query.year ? req.query.year : "";
  connection.query(
    `select product_category_name_english AS product_category, round(avg(review_score), 2) AS avg_review
      from Review NATURAL JOIN Item NATURAL JOIN Product NATURAL JOIN Category NATURAL JOIN OrderInfo
      WHERE order_purchase_year LIKE '%${year}%'
      GROUP BY product_category_name_english
      Order BY avg(review_score) DESC
      LIMIT 10;`,
    function (error, results, fields) {
      if (error) {
        res.json({ error: error });
      } else if (results) {
        res.json({ results: results });
      }
    }
  );
}

// Route 8 (handler)

module.exports = {
  hello,
  yearly_order,
  yearly_sales,
  yearly_review,
  yearly_state,
  search,
  all_market,
  market,
  all_review,
  review,
  all_habit,
  habit,
  transaction,
  top_order,
  top_sales,
  top_review,
};
