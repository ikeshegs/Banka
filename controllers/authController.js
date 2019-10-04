
exports.getSigninLogin = (req, res, next) => {
  
  res.render('auth/signup-login', {
    path: '/signup-login',
    pageTitle: 'Sign Up / Log In',
    oldInput: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationErrors: []
  });
};

