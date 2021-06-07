const errors = require('./errors');

const validPasswordLength = (password) => {
    if (password.length < 6) throw errors.invalidPasswordLength;
  };

const validUndefinedPassword = (password) => {
    if (!password) throw errors.invalidUndefinedPassword;
};

const validEmptyPassword = (password) => {
    if (password === '') throw errors.invalidEmptyPassword;
};

const validatePassword = (password) => {
    validUndefinedPassword(password);
    validPasswordLength(password);
};

const validatePasswordToLogin = (password) => {
    validEmptyPassword(password);
    validUndefinedPassword(password);
};

  module.exports = { validatePassword, validatePasswordToLogin };