/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

const User = () => {
  const users = useSelector((state) => state.users);
  const match = useRouteMatch();
  const user = match ? users.find((userEach) => userEach.id === match.params.id) : null;
  if (!user) {
    return null;
  }

  const padding = {
    margin: '10px',
  };

  return (
    <div style={padding}>
      <table>
        <thead>
          <tr>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Blogs posted</td>
          </tr>
          <tr>
            <td>{user.name}</td>
            <td>{user.blogs.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
