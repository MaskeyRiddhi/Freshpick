const express = require('express');
const router = express.Router();
// const authController = require('../controllers/authController');
const storecheckout = require('../PostController/checkout.js');
router.post('/checkout', storecheckout);
module.exports = router;