const errors = require('./errors');
const { Category } = require('../models');

const allCategories = async () => {
    const categories = await Category.findAll();
    const categoriesId = categories.map((category) => category.id);
    return categoriesId;
};

const validateCategoryIds = async (idList) => {
    const categories = await allCategories();
    const isCategory = idList.filter((categoryId) => categories.includes(categoryId)); 
    if (isCategory.length !== idList.length) throw errors.invalidCategoryId;
};

const validateUndefinedCategory = (idList) => {
    if (!idList) throw errors.invalidUndefinedCategoryId;
  };
   
  const validateEmptyCategory = (idList) => {
    if (idList.length === 0) throw errors.invalidUndefinedCategoryId;  
  };

  const validateCategory = async (idList) => {
  validateUndefinedCategory(idList);
     validateEmptyCategory(idList);
   await validateCategoryIds(idList);
  };

module.exports = { validateCategory };