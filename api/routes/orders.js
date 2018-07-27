
 const express = require('express');
 const router = express.Router();
 
 router.get('/',(req, res, next) =>{
	 res.status(200).json({
		 message: 'Handlaing get request to /Order'
	    });
	});
	
 router.post('/',(req, res, next) =>{
	 res.status(201).json({
		 message: 'Handlaing Post request to /Order'
	    });
	});
	
 router.get('/:orderId',(req, res, next) =>{
	 res.status(200).json({
		 message: 'Order Details',
		 id: req.params.orderId
	    });
	});
 router.delete('/:orderId',(req, res, next) =>{
	 res.status(200).json({
		 message: 'Order deleted',
		 id: req.params.orderId
	    });
	});
 
  module.exports = router;