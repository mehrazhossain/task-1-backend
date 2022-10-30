const express = require('express');
const loginController = require('../controllers/login.controller');
const router = express.Router();

router.route('/').post(loginController.loginUser);

module.exports = router;
