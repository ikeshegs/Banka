
exports.getSigninLogin = (req, res, next) => {
  // let message = req.flash('error');
  // if (message.length > 0) {
  //   message = message[0];
  // } else {
  //   message = null;
  // }
  
  res.render('auth/signup-login', {
    path: '/signup-login',
    pageTitle: 'Sign Up / Log In',
    // errorMessage: message,
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

