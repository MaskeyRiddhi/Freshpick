const express = require('express');
const router = express.Router();
// const authController = require('../controllers/authController');
const DeleteCategory = require('../deleteControllers/deleteCategory.js');
router.delete('/deletecategory/:id', DeleteCategory);
module.exports = router;