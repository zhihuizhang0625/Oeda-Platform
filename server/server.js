const express = require("express");
const mysql = require("mysql");
var cors = require("cors");

const routes = require("./routes");
const config = require("./config.json");

const app = express();

// whitelist localhost 3000
app.use(cors({ credentials: true, origin: ["http://localhost:3000"] }));

// Route 1 - register as GET
app.get("/hello", routes.hello);

// Route 2 - register as GET
// Returns an array of total numbers of orders in 2016, 2017, and 2018,
// and the differences / increments between two years(2016 v.s. 2017, 2017
// v.s. 2018). Display the result in our homepage dashboards
app.get("/YearlyOrder", routes.yearly_order);

// Route 3 - register as GET
// Returns an array of total sales in 2016, 2017, and 2018, and the
// differences / increments between two years(2016 v.s. 2017, 2017 v.s. 2018).
// Display the result in our homepage dashboards
app.get("/YearlySales", routes.yearly_sales);

// Route 4 - register as GET
// Returns an array of average review in 2016, 2017, and 2018, and the
// differences / increments between two years(2016 v.s. 2017, 2017 v.s. 2018).
// Display the result in our homepage dashboards
app.get("/YearlyReview", routes.yearly_review);

// Route 5 - register as GET
// Returns an array of the number of states participating in the ecommerce in
// 2016, 2017, and 2018, and the differences / increments between two years
// (2016 v.s. 2017, 2017 v.s. 2018).Display the result in our homepage dashboards
app.get("/YearlyState", routes.yearly_state);

// Route 6 - register as GET
// Returns details for the transactions that can be filtered by users based on
// price range, category, and time range
app.get("/search", routes.search);

// Route 7 - register as GET
// Returns a sales report for the top 5 cities with the most Walmart stores
app.get("/allmarket", routes.all_market);

// Route 8 - register as GET
// Returns the market info for a specific city in Brazil
app.get("/market", routes.market);

// Route 9 - register as GET
// Return list the top 10 highest average review score product. Users can query
// and create a review report for the top 10 products with highest average review
// score and standard deviation score. We also allow users to filter the review by
// a specific duration of time.
app.get("/allreview", routes.all_review);

// Route 10 - register as GET
app.get("/review", routes.review);

// Route 11 - register as GET
app.get("/allhabit", routes.all_habit);

// Route 12 - register as GET
// Returns an array of the payment habits including the differences in total,
// average, max, and min payment values by credit card users and boleto (bank
// tickets) users from each state.
app.get("/habit", routes.habit);

// Route 13 - register as GET
// Returns 10 of the most recent transactions
app.get("/transaction", routes.transaction);

app.listen(config.server_port, () => {
  console.log(
    `Server running at http://${config.server_host}:${config.server_port}/`
  );
});

module.exports = app;
