const express = require('express');
const router = express.Router();
// const authController = require('../controllers/authController');
const DeleteCustomer = require('../deleteControllers/deleteCustomer.js');

router.delete('/deletecustomer/:id', DeleteCustomer);

module.exports = router;

