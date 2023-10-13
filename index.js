const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const knex = require('knex');
const warehouseRoutes = require('./routes/NewWareHouse'); // Import to newwarehouse file 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection using knex
const db = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

// Use the NewWarehouse route
app.use('/api', warehouseRoutes);

// Start your Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
