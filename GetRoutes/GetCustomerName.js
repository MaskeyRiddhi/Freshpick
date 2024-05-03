const express  = require('express');
const router = express.Router();
const customer_name = require("../getControllers/customers_name");

router.get('/getcustomer',customer_name);
module.exports = router;