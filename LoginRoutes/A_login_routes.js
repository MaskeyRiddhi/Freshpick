const express = require('express');
const router = express.Router();
const LoginAdmin = require('../LoginControllers/loginadmin.js');
    
     
router.post('/admin/login', LoginAdmin);
module.exports = router;

