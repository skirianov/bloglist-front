/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import loginService from '../services/login';

const Login = ({
  username, password, setUsername, setPassword, setUser, setMessage,
}) => {
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem('loggedInUser', JSON.stringify(user));
      setUser(user);
      setUsername('');
      setPassword('');
    } catch (exception) {
      setMessage('BAD');
      setTimeout(() => {
        setMessage(null);
      }, 4000);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username</label>
        <input type="text" autoComplete="off" value={username} name="Username" onChange={({ target }) => setUsername(target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} name="Password" onChange={({ target }) => setPassword(target.value)} />
      </div>
      <button type="submit">Log in</button>
    </form>
  );
};

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
};

export default Login;
