const express = require('express');
const router = express.Router();
// const authController = require('../controllers/authController');
const createCategory = require('../PostController/category.js');
router.post('/category', createCategory);
module.exports = router;