const express = require('express');
const router = express.Router();
// const authController = require('../controllers/authController');
const createCustomer = require('../PostController/CustomerSignup.js');

router.post('/customer', createCustomer);
module.exports = router;

