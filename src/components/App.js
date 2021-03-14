/* eslint-disable array-callback-return */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Blog from './Blog';
import Login from './Login';
import Logout from './Logout';
import User from './User';
import Notification from './Notificattion';
import notificationAction from '../actionCreators/notificationAction';
import blogService from '../services/blogs';
import BlogCreation from './BlogCreation';
import {
  blogsGetAll,
  blogsAddNew,
  deleteOneBlog,
  updateOneBlog,
} from '../actionCreators/blogsAction';

const App = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(blogsGetAll());
  }, []);

  const blogs = useSelector((state) => state.blogs);

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const jsonUser = JSON.parse(loggedInUser);
      setUser(jsonUser);
    }
  }, []);

  const addBlog = async (newBlog) => {
    try {
      blogService.setToken(user.token);
      dispatch(blogsAddNew(newBlog));
      dispatch(notificationAction('OK'));
    } catch (exception) {
      console.log(exception);
    }
  };

  const updateBlog = async (id, newBlog) => {
    dispatch(updateOneBlog(id, newBlog));
  };

  const deleteBlog = async (id) => {
    const blogToDelete = blogs.find((blog) => blog.id === id);
    if (user.username === blogToDelete.user.username) {
      blogService.setToken(user.token);
      dispatch(deleteOneBlog(id));
    } else {
      alert('blogs can be deleted only by user who created it');
    }
  };

  return (
    <div>
      <Notification />
      {user !== null ? <User name={user.name} /> : null}
      {user !== null ? <Logout setUser={setUser} /> : null}
      {user !== null ? <BlogCreation createBlog={addBlog} /> : null}
      <h2>blogs</h2>
      {user === null
        ? (
          <Login
            setUser={setUser}
            username={username}
            password={password}
            setPassword={setPassword}
            setUsername={setUsername}
            setMessage={() => console.log('aha')}
          />
        )
        : blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} updateBlog={updateBlog} deleteBlog={deleteBlog} />
        ))}
    </div>
  );
};

export default App;
