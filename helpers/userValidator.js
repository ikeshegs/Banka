const { check } = require('express-validator');

exports.emailCheck = check('email')
  .exists()
  .withMessage('Email Field is missing')
  .isEmail()
  .withMessage('Invalid Email Format: abcd@efg.xxx')
  
exports.firstnameCheck = check('firstname')
  .exists()
  .withMessage('Firstname field is missing')
  .isLength({ min: 1 })
  .withMessage('Firstname field cannot be empty')
  .isString()
  .withMessage('Firstname must be Alphabets')
  .isAlpha()
  .withMessage('Firstname field cannot be blank')

exports.lastnameCheck = check('lastname')
  .exists()
  .withMessage('Lastname field is missing')
  .isLength({ min: 1 })
  .withMessage('Lastname field cannot be empty')
  .isString()
  .withMessage('Lastname must be Alphabets')
  .isAlpha()
  .withMessage('Lastname field cannot be blank')

exports.passwordCheck = check('password').exists()
  .withMessage('Password Field is missing')
  .isLength({ min: 8, max: 40 })
  .withMessage('Password must be between 6 to 40 characters')
  .not()
  .isNumeric()
  .withMessage('Password Field must contain at least one number')
  .not()
  .isAlpha()
  .withMessage('Password Field must contain at least one alphabet')

exports.confirmPasswordCheck = check('confirmPassword').custom((value, { req }) => {
  if (value !== req.body.password) {
    throw new Error('Password does not match');
  }
  return true;
});