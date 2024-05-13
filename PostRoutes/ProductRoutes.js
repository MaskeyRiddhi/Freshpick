
const express = require('express');
const router = express.Router();
const createProduct = require('../PostController/product.js'); // Adjust the path as per your project structure

router.post('/Products', createProduct); // Use createProduct as the route handler

module.exports = router;

