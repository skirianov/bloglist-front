/* eslint-disable array-callback-return */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Switch,
  Link,
  Route,
} from 'react-router-dom';
import Login from './Login';
import LoggedIn from './LoggedIn';
import Notification from './Notificattion';
import { blogsGetAll } from '../actionCreators/blogsAction';
import loginAction from '../actionCreators/loginAction';
import Users from './Users';
import User from './User';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const padding = {
    margin: '10px',
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(blogsGetAll());
  }, []);

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const jsonUser = JSON.parse(loggedInUser);
      dispatch(loginAction(jsonUser));
    }
  }, []);

  const user = useSelector((state) => state.user);

  return (
    <div>
      <Link style={padding} to="/users">user</Link>
      <Link style={padding} to="/">Home</Link>
      <Switch>
        <Route path="/users/:id">
          <User />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <div>
            <Notification />
            {user !== null ? `${user.username} logged in` : null}
            <h2>blogs</h2>
            {user === null
              ? (
                <Login
                  username={username}
                  password={password}
                  setPassword={setPassword}
                  setUsername={setUsername}
                  setMessage={() => console.log('aha')}
                />
              )
              : <LoggedIn />}
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
