const errors = require('./errors');

const validateContent = (content) => {
    if (content === '' || !content) throw errors.invalidUndefinedContent;  
};

module.exports = {
    validateContent,
};