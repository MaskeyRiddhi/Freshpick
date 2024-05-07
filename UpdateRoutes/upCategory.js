const express = require('express');
const router = express.Router();
const categoryController = require('../updateControllers/UpCategory');
// Route to update a customer by ID
router.put('/upcat/:categoryId', categoryController); // Use the controller function as route handler
module.exports = router;