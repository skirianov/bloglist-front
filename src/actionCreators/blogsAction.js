/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
import blogService from '../services/blogs';

export const blogsGetAll = () => {
  return async dispatch => {
    const blogs = await blogService.getAll();
    dispatch({
      type: 'ALL_BLOGS',
      data: blogs,
    });
  };
};

export const blogsAddNew = (blog) => {
  return async dispatch => {
    const addedBlog = await blogService.create(blog);
    dispatch({
      type: 'NEW_BLOG',
      data: addedBlog,
    });
  };
};

export const updateOneBlog = (id, blog) => {
  return async dispatch => {
    const { updated, user } = await blogService.update(id, blog);
    dispatch({
      type: 'UPDATED',
      data: {
        blog: updated,
        user,
      },
    });
  };
};

export const deleteOneBlog = (id) => {
  return async dispatch => {
    await blogService.deleteOne(id);
    dispatch({
      type: 'DELETE',
      data: id,
    });
  };
};
