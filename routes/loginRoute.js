const { Router } = require('express');
const { loginController } = require('../controllers');

const loginRoute = Router();

// Login do usuario
loginRoute.post('/', loginController.signin);

module.exports = loginRoute;