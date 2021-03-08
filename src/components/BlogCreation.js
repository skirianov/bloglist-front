/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BlogCreation = ({ createBlog }) => {
  const [visible, setVisibility] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    author: '',
    url: '',
  });

  const blogChange = (event) => {
    switch (event.target.name) {
      case 'title':
        setNewBlog({ ...newBlog, title: event.target.value });
        break;
      case 'author':
        setNewBlog({ ...newBlog, author: event.target.value });
        break;
      case 'url':
        setNewBlog({ ...newBlog, url: event.target.value });
        break;
      default:
        setNewBlog(newBlog);
    }
  };

  const addBlog = (event) => {
    event.preventDefault();
    createBlog(newBlog);
    setNewBlog({
      title: '',
      author: '',
      url: '',
    });
    setVisibility(false);
  };

  if (visible) {
    return (
      <div>
        <h3>Create new blog</h3>
        <form onSubmit={addBlog}>
          <label>title: </label>
          <input type="text" value={newBlog.title} onChange={blogChange} name="title" />
          <br />
          <label>author: </label>
          <input type="text" value={newBlog.author} onChange={blogChange} name="author" />
          <br />
          <label>url: </label>
          <input type="text" value={newBlog.url} onChange={blogChange} name="url" />
          <br />
          <button type="submit">Create</button>
        </form>
        <button type="button" onClick={() => setVisibility(!visible)}>cancel</button>
      </div>
    );
  }

  return (
    <div>
      <button type="button" onClick={() => setVisibility(!visible)}>new blog-post</button>
    </div>
  );
};

BlogCreation.propTypes = {
  createBlog: PropTypes.func.isRequired,
};

export default BlogCreation;
