const express = require('express');
const router = express.Router();
const farmerController = require('../updateControllers/upFarmer');

// Route to update a customer by ID
router.put('/upfar/:farmerId', farmerController); // Use the controller function as route handler

module.exports = router;
