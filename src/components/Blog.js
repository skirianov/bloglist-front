/* eslint-disable react/prop-types */
import React from 'react';
const Blog = ({blog}) => (
  <div>
    Title: {blog.title}.  Author: {blog.author}
  </div>
);

export default Blog;
