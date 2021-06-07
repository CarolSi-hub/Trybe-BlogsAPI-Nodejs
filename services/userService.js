const tokenService = require('./tokenService');
const { User, BlogPost, PostCategory } = require('../models');
const { errors } = require('../helpers');

const {    
   validateName, validateEmail, validatePassword,
  } = require('../helpers');

  const create = async (data) => {
    const { displayName, email, password, image } = data;
    validateName(displayName);
    await validateEmail(email);
    validatePassword(password);
    const newUser = await User.create({ displayName, email, password, image });
    delete newUser.password;
    const token = tokenService.generateToken({ data: newUser });
    return token;
  };

  const getUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  };

  const getUserById = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) throw errors.userNotFound;
    return user;
  };

  const deleteUser = async (id) => {
    const allPosts = await BlogPost.findAll(
      { where: { userId: id } },
    );
    const postsId = allPosts.map((post) => post.id);

    await PostCategory.destroy(
      { where: { postId: postsId } },
    );
    await BlogPost.destroy(
      { where: { userId: id } },
    );
    await User.destroy(
      { where: { id } },
    );
  };

  module.exports = {
      create, 
      getUsers,
      getUserById,
      deleteUser,
  };