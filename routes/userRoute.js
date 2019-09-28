const express = require('express');

const userController = require('../controllers/userController');

const userRoute = express.Router();

userRoute.post('/api/v1/auth/signin', userController);

module.exports = userRoute;