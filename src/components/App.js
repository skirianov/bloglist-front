/* eslint-disable array-callback-return */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Blog from './Blog';
import Login from './Login';
import Logout from './Logout';
import User from './User';
import Notification from './Notificattion';
import blogService from '../services/blogs';
import BlogCreation from './BlogCreation';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetching = async () => {
      const fetchedBlogs = await blogService.getAll();
      setBlogs(fetchedBlogs);
    };

    fetching();
  }, []);

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
      const savedBlog = await blogService.create(newBlog);
      setBlogs(blogs.concat(savedBlog));
      setMessage('OK');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    } catch (exception) {
      console.log(exception);
    }
  };

  const updateBlog = async (id, newBlog) => {
    const updatedBlog = await blogService.update(id, newBlog);
    setBlogs(blogs.map((blog) => (blog.id !== id ? blog : updatedBlog)));
  };

  const deleteBlog = async (id) => {
    const blogToDelete = blogs.find((blog) => blog.id === id);
    if (user.username === blogToDelete.user.username) {
      blogService.setToken(user.token);
      await blogService.deleteOne(id);
      const array = [...blogs];
      const index = array.findIndex((blog) => blog.id === id);
      array.splice(index, 1);
      setBlogs(array);
    } else {
      alert('blogs can be deleted only by user who created it');
    }
  };

  return (
    <div>
      <Notification message={message} />
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
            setMessage={setMessage}
          />
        )
        : blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} updateBlog={updateBlog} deleteBlog={deleteBlog} />
        ))}
    </div>
  );
};

export default App;
