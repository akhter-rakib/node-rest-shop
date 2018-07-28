
 const express = require('express');
 const app = express();
 const morgan = require('morgan');//use to log the incoiming request and also to show result in terminal
 
 const bodyParser = require('body-parser');
 
 const productRoutes = require('./api/routes/products');
 const ordersRoutes = require('./api/routes/orders');
 //use to parse body into incoming request
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());
 
 app.use(morgan('dev'));//have to use just before request
 
 app.use('/products', productRoutes);
 app.use('/orders', ordersRoutes);
 
 app.use((req, res, next) =>{
     const error = new Error('Not found');
     error.status = 404;
     next(error);
 });
 
 app.use((error, req, res, next) => {
	 res.status(error.status || 500);
	 res.json({
		error:{
			message: error.message
		} 
	 });
 });
 module.exports = app;