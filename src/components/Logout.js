import React from 'react';
import PropTypes from 'prop-types';

const Logout = ({ setUser }) => {
  const handleLogout = () => {
    window.localStorage.removeItem('loggedInUser');
    window.localStorage.clear();
    setUser(null);
  };

  return (
    <div>
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

Logout.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Logout;
