const express = require('express');
const router = express.Router();
const deleteCategoryController = require('../deleteControllers/deleteCategory'); // Import the delete category controller

router.delete('/deletecategory/:id', deleteCategoryController); // Change the route to delete a category

module.exports = router;
