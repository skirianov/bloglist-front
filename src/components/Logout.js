import React from 'react';
import { useDispatch } from 'react-redux';
import logoutAction from '../actionCreators/logoutAction';

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    window.localStorage.removeItem('loggedInUser');
    window.localStorage.clear();
    dispatch(logoutAction());
  };

  return (
    <div>
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
