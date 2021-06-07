const { tokenService } = require('../services');
const { errors } = require('../helpers');

const authMiddleware = (req, resp, next) => {
  const token = req.headers.authorization;
  if (!token) throw errors.invalidEmptyToken;
  try {
    const result = tokenService.verifyToken(token);
    req.user = result;
    next();
  } catch (error) {
    next(errors.invalidToken);  
  }
};

module.exports = authMiddleware;