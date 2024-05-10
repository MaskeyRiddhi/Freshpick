const express = require('express');
const router = express.Router();
const DeleteCategory = require('../deleteControllers/deleteCategory.js'); // Import the delete category controller

router.delete('/deletecategory/:id', DeleteCategory); // Change the route to delete a category

module.exports = router;
