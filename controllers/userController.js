const { StatusCodes } = require('http-status-codes');
const { userService, tokenService } = require('../services');

// cria novo usuario

const create = async (req, res, next) => {
    const data = req.body;
    try {
      const result = await userService.create(data);
      return res.status(StatusCodes.CREATED).json(result);
    } catch (error) {
      next(error);
    }
  };

// busca usuario

const getUsers = async (req, res, next) => { 
  try {
    const result = await userService.getUsers();
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    next(error);
  }
};

// buca usuario pelo id

const getUserById = async (req, res, next) => {
  const { params: { id } } = req;
  try {
    const user = await userService.getUserById(id);
    return res.status(StatusCodes.OK).json(user);
  } catch (error) {
    next(error);
  }
};

// dele usuario corrente

const deleteUser = async (req, res, next) => {
  const token = req.headers.authorization;   
  const tokenData = tokenService.decodeToken(token);
  const userId = tokenData.data.id;
  console.log('entrou na controller');
  try {
    await userService.deleteUser(userId);
    return res.status(StatusCodes.NO_CONTENT).end();
  } catch (error) {
    next(error);
  }
};

  module.exports = {
    create,
    getUsers,
    getUserById,
    deleteUser,
  };