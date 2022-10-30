const express = require('express');
const loginController = require('../controllers/login.controller');
const router = express.Router();

// middleware
// const { auth } = require('../middleware/auth');

// GET - get user as login
router.route('/').post(loginController.loginUser);

// Logout user
// router.route('/logout').post(auth, loginController.userLogout);

module.exports = router;
