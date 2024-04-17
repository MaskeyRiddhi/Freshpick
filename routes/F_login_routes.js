const express = require('express');
const router = express.Router();
const LoginFarmer = require('../controllers/loginfarmer.js');
    
     
router.post('/farmer/login', LoginFarmer);
module.exports = router;

