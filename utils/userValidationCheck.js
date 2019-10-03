const { check } = require('express-validator/check');

exports.emailCheck = email => {
  if (email) {
    body('email')
      .isEmail()
      .isAlphanumeric()
      .withMessage('Please enter a valid email address.')
      .normalizeEmail()
      .not().isEmpty()
  }
}

exports.firstNameCheck = firstname => {
  if (firstname) {
    body('firstName')
      .isString()
      .not().isEmpty()
  }
}

exports.lastName = lastname => {
  if (lastname) {
    body('lastName')
      .isString()
      .not().isEmpty()
  }
}

exports.password = passwrd => {
  if (passwrd) {
    body('password')
  }
}