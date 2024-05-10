const express = require('express');
const router = express.Router();
const categoryController = require('../updateControllers/UpCategory'); // Import the category controller

// Route to update a category by ID
router.put('/upcat/:categoryId', categoryController); // Use the category controller function as route handler

module.exports = router;
