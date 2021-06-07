const { validateName, validateCategoryName } = require('./validateName');
const { validateEmail, validateEmailToLogin } = require('./validateEmail');
const { validatePassword, validatePasswordToLogin } = require('./validatePassword');
const { validateTitle } = require('./validateTitle');
const { validateContent } = require('./validateContent');
const { validateCategory } = require('./validateCategoryIds');
const errors = require('./errors');

module.exports = {
  validateName, 
  validateEmail,
  validatePassword,
  validateEmailToLogin,
  validatePasswordToLogin,
  validateCategoryName,
  validateTitle,
  validateContent,
  validateCategory,
  errors,
};