const express = require('express');
const router = express.Router();
const deleteProductController = require('../deleteControllers/deleteproducts'); // Import the delete category controller

router.delete('/deleteproduct/:id', deleteProductController); // Change the route to delete a category

module.exports = router;
