const express = require('express');
const loginController = require('../controllers/login.controller');
const router = express.Router();

// GET - get user as login
router.route('/login').post(loginController.getUser);

module.exports = router;
