const jwt = require('jsonwebtoken');

const secret = 'blogsAPI';

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  
  const generateToken = (payload) => jwt.sign(payload, secret, jwtConfig);
  
  const verifyToken = (token) => jwt.verify(token, secret);

  const decodeToken = (token) => jwt.decode(token, secret);
  
  module.exports = {
    generateToken,
    verifyToken,
    decodeToken,
  };