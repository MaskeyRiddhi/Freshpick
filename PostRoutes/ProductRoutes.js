// const express = require('express');
// const router = express.Router();
// // const authController = require('../controllers/authController');
// const createProduct = require('../PostController/Product.js');


// router.post('/product', createProduct);
// module.exports = router;

const express = require('express');
const router = express.Router();
const createProduct = require('../PostController/Product.js');

router.post('/product', createProduct);

module.exports = router;
