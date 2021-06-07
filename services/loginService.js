const tokenService = require('./tokenService');
const { User } = require('../models');
const { validateEmailToLogin, validatePasswordToLogin, errors } = require('../helpers');

const signin = async (data) => {
    const { email, password } = data; 
    validateEmailToLogin(email);
    validatePasswordToLogin(password);   
    const user = await User.findOne({ where: { email } });
    if (!user) throw errors.noUserFound;
    if (user.password !== password) throw errors.notValidPassword;
    delete user.password;
    const token = tokenService.generateToken({ data: user });
    return { token };
  };

  module.exports = {
      signin, 
  };