const express  = require('express');
const router = express.Router();
const farmer_name = require("../getControllers/getFarmer");


router.get('/getfarmer',farmer_name);
module.exports = router;