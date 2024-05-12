const express = require('express');
const router = express.Router();
const productController = require('../updateControllers/UpProducts');

// Route to update a customer by ID
router.put('/uppro/:productId', productController); // Use the controller function as route handler

module.exports = router;
