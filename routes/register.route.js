const express = require('express');
const registerController = require('../controllers/register.controller');
const router = express.Router();

// POST - Register new user
router.route('/').post(registerController.registerUser);

module.exports = router;
