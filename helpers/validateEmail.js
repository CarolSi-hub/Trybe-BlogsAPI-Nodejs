const { User } = require('../models');
const errors = require('./errors');

const validEmailFormat = (email) => {
  const REGEX = /\S+@\S+\.\S+/;
  if (!REGEX.test(email)) throw errors.invalidEmailFormat;
};

const validUndefinedEmail = (email) => {
    if (!email) throw errors.invalidUndefinedEmail;
};

const validEmptyEmail = (email) => {
    if (email === '') throw errors.invalidEmptyEmail;
};

const validSingleUser = async (email) => {
   const existUser = await User.findOne({ where: { email } });  
   if (existUser !== null) throw errors.userAlreadyExist;
};

const validateEmail = async (email) => {
    validUndefinedEmail(email);
    validEmailFormat(email);
    await validSingleUser(email);
};

const validateEmailToLogin = (email) => {
  validEmptyEmail(email);
  validUndefinedEmail(email);  
};

module.exports = { validateEmail, validateEmailToLogin };