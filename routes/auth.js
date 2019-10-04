const express = require('express');

// Controllers
const authController = require('../controllers/authController');

const auth = express.Router();

auth.get('/signup-login', authController.getSigninLogin);

module.exports = auth;