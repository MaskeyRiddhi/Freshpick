const express = require('express');
const router = express.Router();
const Logincustomer = require('../controllers/logincustomer.js');


router.post('/customer/login', Logincustomer);
module.exports = router;

