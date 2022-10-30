const express = require('express');
const loginController = require('../controllers/login.controller');
const router = express.Router();

// middleware
const { auth } = require('../middleware/auth');

// GET - get user as login
router.route('/login').post(loginController.getUser);

// Logout user
router.route('/logout').post(auth, loginController.userLogout);

module.exports = router;
