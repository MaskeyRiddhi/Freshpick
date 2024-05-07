const express  = require('express');
const router = express.Router();
const categoryInfo = require("../getControllers/getCategory");


router.get('/getcategory',categoryInfo);
module.exports = router;