const express = require('express');

// Controllers
const userController = require('../controllers/userController');

const {
  emailCheck,
  firstnameCheck,
  lastnameCheck,
  passwordCheck,
  confirmPasswordCheck
} = require('../helpers/userValidator');

const user = express.Router();

user.post('/auth/signup', [emailCheck, firstnameCheck, lastnameCheck, passwordCheck, confirmPasswordCheck], userController.createUser);
user.post('/auth/login', [emailCheck, passwordCheck])

module.exports = user;