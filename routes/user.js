const express = require('express');

// Controllers
const {
  getSignUpLoginPage,
  createUser
} = require('../controllers/userController');

const {
  emailCheck,
  firstnameCheck,
  lastnameCheck,
  phoneNumberCheck,
  accountTypeCheck,
  passwordCheck,
  confirmPasswordCheck
} = require('../helpers/userValidator');

const user = express.Router();

user.get('/signup-login', getSignUpLoginPage);

user.post('/api/v1/auth/signup', [emailCheck, firstnameCheck, lastnameCheck, phoneNumberCheck, accountTypeCheck, passwordCheck, confirmPasswordCheck], createUser);
user.post('/api/v1/auth/login', [emailCheck, passwordCheck])

module.exports = user;