const { Router } = require('express');
const { postController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

const postRoute = Router();

// Criar posts
postRoute.post('/', authMiddleware, postController.create);

// Buscar posts por id
postRoute.get('/:id', authMiddleware, postController.getPostById);

// Buscar posts
postRoute.get('/', authMiddleware, postController.getAllPosts);

// atualiza o post
postRoute.put('/:id', authMiddleware, postController.updatePost);

// deleta o post
postRoute.delete('/:id', authMiddleware, postController.deletePost);

module.exports = postRoute;