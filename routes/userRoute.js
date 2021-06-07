const { Router } = require('express');
const { userController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const userRoute = Router();

// Criar Usuario
userRoute.post('/', userController.create);

// busca usuario pelo id
userRoute.get('/:id', authMiddleware, userController.getUserById);

// busca usuario
userRoute.get('/', authMiddleware, userController.getUsers);

// deleta usuario
userRoute.delete('/me', authMiddleware, userController.deleteUser);

module.exports = userRoute;