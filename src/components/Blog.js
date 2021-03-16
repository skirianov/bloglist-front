/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { updateOneBlog, deleteOneBlog } from '../actionCreators/blogsAction';
import blogService from '../services/blogs';

const style = {
  border: '1px solid black',
  margin: '4px',
  padding: '6px',
};

const Blog = ({ blog }) => {
  const dispatch = useDispatch();
  const user = JSON.parse(window.localStorage.getItem('loggedInUser'));
  const [visible, setVisibility] = useState(false);

  const updateBlog = async (id, newBlog) => {
    dispatch(updateOneBlog(id, newBlog));
  };

  const increaseLikes = async () => {
    // eslint-disable-next-line no-param-reassign
    blog.likes += 1;
    await updateBlog(blog.id, blog);
  };

  const deleteBlog = () => {
    if (user.username === blog.user.username) {
      blogService.setToken(user.token);
      if (window.confirm(`do you want to delete "${blog.title}" by ${blog.author}?`)) {
        dispatch(deleteOneBlog(blog.id));
      }
    } else {
      alert('blogs can be deleted only by user who created it');
    }
  };

  if (visible) {
    return (
      <div style={style}>
        <p>
          Title:
          {' '}
          {blog.title}
          .
        </p>
        <p>
          Author:
          {' '}
          {blog.author}
        </p>
        <p>
          Likes:
          {' '}
          {blog.likes}
        </p>
        <p>
          User posted:
          {' '}
          {blog.user.name}
        </p>
        <button type="button" onClick={() => setVisibility(!visible)}>view</button>
        <button type="button" onClick={increaseLikes}>like</button>
        <button type="button" onClick={deleteBlog}>delete</button>
      </div>
    );
  }

  return (
    <div style={style}>
      Title:
      {' '}
      {blog.title}
      .  Author:
      {' '}
      {blog.author}
      <button type="button" onClick={() => setVisibility(!visible)}>view</button>
    </div>
  );
};

Blog.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  blog: PropTypes.object.isRequired,
};
export default Blog;
