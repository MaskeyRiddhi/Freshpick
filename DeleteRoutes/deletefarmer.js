const express = require('express');
const router = express.Router();
// const authController = require('../controllers/authController');
const Deletefarmer = require('../deleteControllers/deletefarmer.js');

router.delete('/deletefarmer/:id', Deletefarmer);

module.exports = router;

