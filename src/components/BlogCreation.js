import React from 'react';

const BlogCreation = ({ handleNewBlog, blogChange, newBlog }) => {
  return (
    <div>
    <h3>Create new blog</h3>
    <form onSubmit={handleNewBlog}>
      <label>title: </label>
      <input type="text" value={newBlog.title} onChange={blogChange} name="title" />
      <br />
      <label>author: </label>
      <input type="text" value={newBlog.author} onChange={blogChange} name="author" />
      <br />
      <label>url: </label>
      <input type="text" value={newBlog.url} onChange={blogChange} name="url" />
      <br />
      <button type="submit">Create!</button>
    </form>
    </div>
  )
};

export default BlogCreation;