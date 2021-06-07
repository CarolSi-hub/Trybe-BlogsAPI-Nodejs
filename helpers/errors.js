const { StatusCodes } = require('http-status-codes');

const invalidName = {
  isError: true,
  status: StatusCodes.BAD_REQUEST,
  message: '"displayName" length must be at least 8 characters long',
};

const invalidUndefinedName = {
  isError: true,
  status: StatusCodes.BAD_REQUEST,
  message: '"name" is required',
};

const invalidEmailFormat = {
  isError: true,
  status: StatusCodes.BAD_REQUEST,
  message: '"email" must be a valid email',
};

const invalidUndefinedEmail = {
  isError: true,
  status: StatusCodes.BAD_REQUEST,
  message: '"email" is required',
};

const invalidEmptyEmail = { 
    isError: true,
    status: StatusCodes.BAD_REQUEST,
    message: '"email" is not allowed to be empty',
};

const userAlreadyExist = {
  isError: true,
  status: StatusCodes.CONFLICT,
  message: 'User already registered',
};

const invalidPasswordLength = {
  isError: true,
  status: StatusCodes.BAD_REQUEST,
  message: '"password" length must be 6 characters long',
};

const invalidUndefinedPassword = {
  isError: true,
  status: StatusCodes.BAD_REQUEST,
  message: '"password" is required',
};

const invalidEmptyPassword = {
  isError: true,
  status: StatusCodes.BAD_REQUEST,
  message: '"password" is not allowed to be empty',
};

const noUserFound = {
  isError: true,
  status: StatusCodes.BAD_REQUEST,
  message: 'Invalid fields',
};

const notValidPassword = {
  isError: true,
  status: StatusCodes.BAD_REQUEST,
  message: 'Invalid Fields',
};

const invalidEmptyToken = {
  isError: true,
  status: StatusCodes.UNAUTHORIZED,
  message: 'Token not found',
};

const invalidToken = {
  isError: true,
  status: StatusCodes.UNAUTHORIZED,
  message: 'Expired or invalid token',
};

const userNotFound = {
  isError: true,
  status: StatusCodes.NOT_FOUND,
  message: 'User does not exist',
};

const invalidUndefinedTitle = {
  isError: true,
  status: StatusCodes.BAD_REQUEST,
  message: '"title" is required',
};

const invalidUndefinedContent = {
  isError: true,
  status: StatusCodes.BAD_REQUEST,
  message: '"content" is required',
};

const invalidUndefinedCategoryId = {
  isError: true,
  status: StatusCodes.BAD_REQUEST,
  message: '"categoryIds" is required',
};

const invalidCategoryId = {
  isError: true,
  status: StatusCodes.BAD_REQUEST,
  message: '"categoryIds" not found',
};

const postNotFound = {
  isError: true,
  status: StatusCodes.NOT_FOUND,
  message: 'Post does not exist',
};

const UnauthorizedUser = {
  isError: true,
  status: StatusCodes.UNAUTHORIZED,
  message: 'Unauthorized user',
};

const notAllowedToEditCategory = {
  isError: true,
  status: StatusCodes.BAD_REQUEST,
  message: 'Categories cannot be edited',
};

module.exports = {
  invalidName,
  invalidEmailFormat, 
  invalidUndefinedEmail,
  invalidEmptyEmail,
  userAlreadyExist,
  invalidPasswordLength,
  invalidUndefinedPassword,
  invalidEmptyPassword,
  noUserFound,
  notValidPassword,
  invalidEmptyToken,
  invalidToken,
  userNotFound,
  invalidUndefinedName,
  invalidUndefinedTitle,
  invalidUndefinedContent,
  invalidCategoryId,
  invalidUndefinedCategoryId,
  postNotFound,
  UnauthorizedUser,
  notAllowedToEditCategory,
};