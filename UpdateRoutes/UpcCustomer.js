const express = require('express');
const router = express.Router();
const customerController = require('../updateControllers/UpCustomer');

// Route to update a customer by ID
router.put('/upcus/:customerId', customerController); // Use the controller function as route handler

module.exports = router;
