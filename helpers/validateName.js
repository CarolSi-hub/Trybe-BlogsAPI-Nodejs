const errors = require('./errors');

const validateUndefinedName = (name) => {
  if (!name) throw errors.invalidName;
};

const validateNameLength = (name) => {
  if (name.length < 8) throw errors.invalidName;  
};

const validateEmptyName = (name) => {
  if (name === '') throw errors.invalidName;  
};

const validateName = (name) => {
  validateUndefinedName(name);  
  validateEmptyName(name);
  validateNameLength(name);
};

const validateCategoryName = (name) => {
  if (!name) throw errors.invalidUndefinedName;
};

module.exports = { validateName, validateCategoryName };