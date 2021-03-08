import React, { useState } from 'react';
import PropTypes from 'prop-types';

const style = {
  border: '1px solid black',
  margin: '4px',
  padding: '6px',
};

const Blog = ({ blog, updateBlog, deleteBlog }) => {
  const [visible, setVisibility] = useState(false);

  const increaseLikes = async () => {
    // eslint-disable-next-line no-param-reassign
    blog.likes += 1;
    await updateBlog(blog.id, blog);
  };

  const deleteIt = async () => {
    // eslint-disable-next-line no-alert
    if (window.confirm(`do you want to delete "${blog.title}" by ${blog.author}?`)) {
      await deleteBlog(blog.id);
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
        <button type="button" onClick={deleteIt}>delete</button>
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
  updateBlog: PropTypes.func.isRequired,
  deleteBlog: PropTypes.func.isRequired,
};
export default Blog;
