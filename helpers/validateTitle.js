const errors = require('./errors');

const validateTitle = (title) => {
    if (title === '' || !title) throw errors.invalidUndefinedTitle;  
};

module.exports = {
    validateTitle,
};