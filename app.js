
 const express = require('express');
 
 const app = express();
 
 const bodyParser = require('body-parser');
 
 const productRoutes = require('./api/routes/products');
 const ordersRoutes = require('./api/routes/orders');
 //use to parse body into incoming request
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());
 
 app.use('/products', productRoutes);
 app.use('/orders', ordersRoutes);
 
 module.exports = app;