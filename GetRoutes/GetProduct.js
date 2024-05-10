const express = require('express');
const router = express.Router();
const productController = require('../getControllers/getProduct'); // Import the getProduct controller

router.get('/getproducts', productController); // Change the route to fetch products

module.exports = router;

