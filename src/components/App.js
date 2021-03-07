import React, {useState, useEffect} from 'react';
import Blog from './Blog';
import Login from './Login';
import Logout from './Logout';
import User from './User';
import Notification from './Notificattion';
import blogService from '../services/blogs';
import BlogCreation from './BlogCreation';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [newBlog, setNewBlog] = useState({
    title: '',
    author: '',
    url: '',
  });
  const [message, setMessage] = useState(null);

  useEffect(() => {
      const fetching = async () => {
        const blogs = await blogService.getAll();
        setBlogs(blogs);
      };

      fetching();
  }, []);

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUser(user);
    }
  }, []);

  const handleNewBlog = async (event) => {
    event.preventDefault();
    
    try { 
      blogService.setToken(user.token);

      const savedBlog = await blogService.create(newBlog);
      setBlogs(blogs.concat(savedBlog));
      setMessage('OK');
      setTimeout(() => {
        setMessage(null);
        setNewBlog({
          title: '',
          author: '',
          url: '',
        });
      }, 3000);
      
      
    } catch (exception) {
      console.log(exception);
    }
  }

  const blogChange = (event) => {
    switch (event.target.name) {
      case "title":
        setNewBlog({...newBlog, title: event.target.value});
        break;
      case "author":
        setNewBlog({...newBlog, author: event.target.value});
        break;
      case "url":
        setNewBlog({...newBlog, url: event.target.value});
        break;  
    }
  }

  return (
    <div>
      <Notification message={message} newBlog={newBlog} />
      {user !== null ? <User name={user.name} /> : null}
      {user !== null ? <Logout setUser={setUser} /> : null}
      {user !== null ? <BlogCreation handleNewBlog={handleNewBlog} blogChange={blogChange} newBlog={newBlog} /> : null}
      <h2>blogs</h2>
      {user === null
        ? <Login setUser={setUser} username={username} password={password} setPassword={setPassword} setUsername={setUsername} setMessage={setMessage} />
        :
          blogs.map((blog) =>
            <Blog key={blog.id} blog={blog} />,
          )
        
      }
      
    </div>
  );
};

export default App;
