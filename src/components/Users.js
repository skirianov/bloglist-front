/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import usersAction from '../actionCreators/usersAction';

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersAction());
  }, []);

  const users = useSelector((state) => state.users);
  const userLoggedIn = JSON.parse(window.localStorage.getItem('loggedInUser'));
  return (
    <div>
      <p>{userLoggedIn.username} logged in</p>
      <table>
        <thead>
          <tr>
            <th>users</th>
            <th>blogs created</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td><Link to={`/users/${user.id}`}>{user.name}</Link></td>
              <td>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
