const { BlogPost, User, Category, PostCategory } = require('../models');
const { validateTitle, validateContent, validateCategory, errors } = require('../helpers');

const create = async (data, userId) => {
 const { title, content, categoryIds } = data;
 validateTitle(title);
 validateContent(content);
 await validateCategory(categoryIds);
 const published = new Date();
 const updated = new Date();
 const blogpost = await BlogPost.create({ title, content, userId, published, updated });
 delete blogpost.published;
 delete blogpost.updated;
 return blogpost;
};

const getAllPosts = async () => {
    const posts = await BlogPost.findAll(
        {
          include: [
            { model: User, as: 'user' },
            { model: Category, as: 'categories' },
          ],
        },
      );  
      // aula de Luise 
    
    return posts;
};

const getPostById = async (id) => {
    const post = await BlogPost.findByPk(id, 
        {
          include: [
            { model: User, as: 'user' },
            { model: Category, as: 'categories', attributes: { exclude: [['PostCategory']] } },
          ],
        });
    
        if (!post) throw errors.postNotFound;
    
    return post;
};

const updatePost = async (data, id, userId) => {
    if (data.categoryIds) throw errors.notAllowedToEditCategory;
    const { title, content } = data;
    validateTitle(title);
    validateContent(content);
    const postToUpdate = await getPostById(id);
    if (postToUpdate.userId !== userId) throw errors.UnauthorizedUser;
    const updated = new Date();
    const [updatedPostId] = await BlogPost.update(
        { title, content, updated },
    { where: { id } },
);
const updatedPost = await BlogPost.findByPk(updatedPostId, 
    {
      include: [
        { model: Category, as: 'categories' },
      ],
    });

    return updatedPost;
};

const deletePost = async (id, userId) => {
    const postToUpdate = await getPostById(id);
    if (!postToUpdate) throw errors.postNotFound;
    if (postToUpdate.userId !== userId) throw errors.UnauthorizedUser;
    await PostCategory.destroy(
        { where: { postId: id } },
      );
    await BlogPost.destroy(
        { where: { id } },
      );
};

module.exports = {
    create,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost,
};