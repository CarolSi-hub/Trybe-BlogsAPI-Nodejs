const Category = (sequelize, DataTypes) => {
    const CategoryModel = sequelize.define('Category', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
    }, {
      timestamps: false,
      tableName: 'Categories',
    });
  
    return CategoryModel;
  };
  
  module.exports = Category;