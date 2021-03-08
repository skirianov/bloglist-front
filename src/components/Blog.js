/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const style = {
  border: '1px solid black',
  margin: '4px',
  padding: '6px',
}
const Blog = ({ blog, updateBlog, deleteBlog }) => {
  const [visible, setVisibility] = useState(false);  

  const increaseLikes = async () => {
    blog.likes++;
    await updateBlog(blog.id, blog);
  }

  const deleteIt = async () => {
    if (window.confirm(`do you want to delete "${blog.title}" by ${blog.author}?`)) {
      await deleteBlog(blog.id);
    } 
  }


  if (visible) {
    return (
      <div style={style}>
        <p>Title: {blog.title}.</p>
        <p>Author: {blog.author}</p>
        <p>Likes: {blog.likes}</p>
        <p>User posted: {blog.user.name}</p>
        <button onClick={() => setVisibility(!visible)}>view</button>
        <button onClick={increaseLikes}>like</button>
        <button onClick={deleteIt}>delete</button>
      </div>
    )
  }

  return (
  <div style={style}>
    Title: {blog.title}.  Author: {blog.author} 
    <button onClick={() => setVisibility(!visible)}>view</button>
  </div>
)};

export default Blog;
