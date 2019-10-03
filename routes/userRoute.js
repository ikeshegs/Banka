const express = require('express');

// Controllers
const userController = require('../controllers/userController');

const { emailCheck, firstnameCheck, lastnameCheck, passwordCheck, confirmPasswordCheck } = require('../helpers/userValidator');

const userRoute = express.Router();

userRoute.post('/auth/signup', [emailCheck, firstnameCheck, lastnameCheck, passwordCheck, confirmPasswordCheck], userController.createUser);

module.exports = userRoute;