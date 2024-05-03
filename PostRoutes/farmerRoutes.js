const express = require('express');
const router = express.Router();
// const authController = require('../controllers/authController');
const createFarmer = require('../PostController/FarmerSignup.js');


router.post('/farmer', createFarmer);
module.exports = router;

