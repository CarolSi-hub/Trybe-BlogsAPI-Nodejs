const { validateCategoryName } = require('../helpers');
const { Category } = require('../models');

const create = async (data) => {
    const { name } = data;
    validateCategoryName(name);
    const category = await Category.create({ name });
    return category;
};

const getCategories = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = {
    create,
    getCategories, 
};