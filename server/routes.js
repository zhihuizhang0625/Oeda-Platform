const express = require('express');
const mysql      = require('mysql');
var cors = require('cors')


const routes = require('./routes')
const config = require('./config.json')

const app = express();

// whitelist localhost 3000
app.use(cors({ credentials: true, origin: ['http://localhost:3000'] }));

// Route 1 - register as GET 
app.get('/hello', routes.hello)

// Route 2 - register as GET 
app.get('/YearlyOrder', routes.yearly_order)

// Route 3 - register as GET 
app.get('/YearlySales', routes.yearly_sales)

// Route 4 - register as GET 
app.get('/YearlyReview', routes.yearly_review)

// Route 5 - register as GET 
app.get('/YearlyState', routes.yearly_state)

// Route 6 - register as GET 
app.get('/search', routes.search)

// Route 7 - register as GET 
app.get('/allmarket', routes.all_market)

// Route 8 - register as GET 
app.get('/market', routes.market)

// Route 9 - register as GET 
app.get('/allreview', routes.all_review)

// Route 10 - register as GET 
app.get('/review', routes.review)

// Route 11 - register as GET 
app.get('/allhabit', routes.all_habit)

// Route 12 - register as GET 
app.get('/habit', routes.habit)



app.listen(config.server_port, () => {
    console.log(`Server running at http://${config.server_host}:${config.server_port}/`);
});

module.exports = app;
