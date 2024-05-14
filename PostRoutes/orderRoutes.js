
const express = require('express');
const router = express.Router();
const createOrder = require('../PostController/order.js'); // Adjust the path as per your project structure

router.post('/Order', createOrder); // Use createProduct as the route handler

module.exports = router;

