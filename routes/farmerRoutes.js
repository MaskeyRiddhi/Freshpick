const express = require('express');
const router = express.Router();
// const authController = require('../controllers/authController');
const createFarmer = require('../controllers/FarmerSignup.js');


// Route for user registration (signup)
// router.post('/signup', authController.signup);

// Route for user login
// router.get('/login', authController.login);
router.post('/farmer', createFarmer);
module.exports = router;

