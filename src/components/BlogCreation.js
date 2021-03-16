/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import blogService from '../services/blogs';
import { blogsAddNew } from '../actionCreators/blogsAction';
import notificationAction from '../actionCreators/notificationAction';

const BlogCreation = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
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
    setVisibility(false);
    try {
      blogService.setToken(user.token);
      dispatch(blogsAddNew(newBlog));
      setNewBlog({
        title: '',
        author: '',
        url: '',
      });
      dispatch(notificationAction('OK'));
    } catch (exception) {
      // eslint-disable-next-line no-console
      console.log(exception);
    }
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

export default BlogCreation;
