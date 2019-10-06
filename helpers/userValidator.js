const {
  check
} = require('express-validator');

exports.emailCheck = check('email')
  .exists()
  .withMessage('Email Field is missing')
  .isEmail()
  .withMessage('Invalid Email Format: abcd@efg.xxx')

exports.firstnameCheck = check('firstname')
  .exists()
  .withMessage('Firstname field is missing')
  .isLength({
    min: 1
  })
  .withMessage('Firstname field cannot be empty')
  .isString()
  .withMessage('Firstname must be Alphabets')
  .isAlpha()
  .withMessage('Firstname field cannot be blank')

exports.lastnameCheck = check('lastname')
  .exists()
  .withMessage('Lastname field is missing')
  .isLength({
    min: 1
  })
  .withMessage('Lastname field cannot be empty')
  .isString()
  .withMessage('Lastname must be Alphabets')
  .isAlpha()
  .withMessage('Lastname field cannot be blank')

exports.phoneNumberCheck = check('phone')
  .exists()
  .withMessage('Phone Number field is missing')
  .isLength({
    min: 11,
    max: 11
  })
  .withMessage('Phone Number must be 11 digits')
  .isNumeric()
  .withMessage('Phone Number must be a Number')

exports.accountTypeCheck = check('accountType')
  .exists()
  .withMessage('Account Type field is missing')
  .isString()
  .withMessage('Account Type must be a string')
  // .custom((value) => {
  //   if (value !== 'staff' || value !== 'client') {
  //     throw new Error('Please select either staff or client type of account.');
  //   }
  // })

exports.passwordCheck = check('password').exists()
  .withMessage('Password Field is missing')
  .isLength({
    min: 8,
    max: 40
  })
  .withMessage('Password must be between 8 to 40 characters')
  .not()
  .isNumeric()
  .withMessage('Password Field must contain at least one number')
  .not()
  .isAlpha()
  .withMessage('Password Field must contain at least one alphabet')

exports.confirmPasswordCheck = check('confirmPassword')
  .custom((value, {
    req
  }) => {
    if (value !== req.body.password) {
      throw new Error('Password does not match');
    }
    return true;
  });