const { StatusCodes } = require('http-status-codes');
const { loginService } = require('../services');

// login do usuario

const signin = async (req, res, next) => {
    const data = req.body;   
    try {
      const result = await loginService.signin(data);
      return res.status(StatusCodes.OK).json(result);
    } catch (error) {
      next(error);
    }
  };

  module.exports = {
    signin,
  };