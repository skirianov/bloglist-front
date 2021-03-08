import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name }) => (
  <div>
    User:
    {name}
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
};

export default User;
