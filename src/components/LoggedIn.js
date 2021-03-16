import React from 'react';
import Logout from './Logout';
import BlogCreation from './BlogCreation';
import Blogs from './Blogs';

const LoggedIn = () => (
  <div>
    <Logout />
    <BlogCreation />
    <Blogs />
  </div>
);

export default LoggedIn;
