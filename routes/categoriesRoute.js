const { Router } = require('express');
const { categoryController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const categoriesRoute = Router();

// cria categoria
categoriesRoute.post('/', authMiddleware, categoryController.create);

// busca categorias
categoriesRoute.get('/', authMiddleware, categoryController.getCategories);

module.exports = categoriesRoute;