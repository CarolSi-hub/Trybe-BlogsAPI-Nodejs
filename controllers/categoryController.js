const { StatusCodes } = require('http-status-codes');
const { categoryService } = require('../services');

const create = async (req, res, next) => {
    const data = req.body;
    try {
      const result = await categoryService.create(data);
      return res.status(StatusCodes.CREATED).json(result);
    } catch (error) {
      next(error);
    }
  };

  const getCategories = async (req, res, next) => {
    try {
        const result = await categoryService.getCategories();
        return res.status(StatusCodes.OK).json(result);
      } catch (error) {
        next(error);
      }
  };

  module.exports = {
    create,
    getCategories,
  };