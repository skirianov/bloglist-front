import React from 'react';

const Logout = ({ setUser }) => {

  const handleLogout = () => {
    window.localStorage.removeItem('loggedInUser');
    window.localStorage.clear();
    setUser(null);
  }


  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
};

export default Logout;