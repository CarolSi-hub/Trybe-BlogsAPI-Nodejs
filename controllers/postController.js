const { StatusCodes } = require('http-status-codes');
const { postService, tokenService } = require('../services');

const create = async (req, res, next) => {
    const data = req.body;
    const token = req.headers.authorization;   
    const tokenData = tokenService.decodeToken(token);
    const { id } = tokenData.data;
        try {
          const result = await postService.create(data, id);
          return res.status(StatusCodes.CREATED).json(result);
        } catch (error) {
          next(error);
        }
};

const getAllPosts = async (req, res, next) => { 
  try {
    const posts = await postService.getAllPosts();
    return res.status(StatusCodes.OK).json(posts);
  } catch (error) {
    next(error);
  }
};

const getPostById = async (req, res, next) => {
  const { params: { id } } = req;
  try {
    const post = await postService.getPostById(id);
    return res.status(StatusCodes.OK).json(post);
  } catch (error) {
    next(error);    
  }
};

const updatePost = async (req, res, next) => {
  const { params: { id } } = req;
  const token = req.headers.authorization;   
  const tokenData = tokenService.decodeToken(token);
  const userId = tokenData.data.id;
  const data = req.body;
  try {
    const updatedPost = await postService.updatePost(data, id, userId);
    return res.status(StatusCodes.OK).json(updatedPost);
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  const { params: { id } } = req;
  const token = req.headers.authorization;   
  const tokenData = tokenService.decodeToken(token);
  const userId = tokenData.data.id;
  try {
    await postService.deletePost(id, userId);
    return res.status(StatusCodes.NO_CONTENT).end();    
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getAllPosts, getPostById, updatePost, deletePost };
