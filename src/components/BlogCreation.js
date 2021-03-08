import React, { useState } from 'react';

const BlogCreation = ({ createBlog }) => {
  const [visible, setVisibility] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    author: '',
    url: '',
  });

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
  }

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
      <button onClick={() => setVisibility(!visible)}>cancel</button>
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => setVisibility(!visible)}>new blog-post</button>
    </div>
  )

};

export default BlogCreation;