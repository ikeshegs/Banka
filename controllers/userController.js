const bcrypt = require('bcrypt');

const {
  validationResult
} = require('express-validator');


const getSignUpLoginPage = (req, res) => {
  res.render('auth/signup-login', {
    path: '/signup-login',
    pageTitle: 'Sign Up/Log In',
    oldInput: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    },
    onPage: true,
    validationErrors: []
  });
};

const createUser = async (req, res) => {
  try {
    const errors = await validationResult(req);
    
    if (!errors.isEmpty()) {
      const error = errors.array();
      return res.status(400).json({
        status: 400,
        error: error[0].msg
      });
    }
  } catch (error) {

  }
}

module.exports = {
  getSignUpLoginPage,
  createUser
};