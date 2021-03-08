import React from 'react';
import PropTypes from 'prop-types';

const success = {
  color: 'green',
  backgroundColor: 'lightgrey',
  border: '3px solid green',
};

const warning = {
  color: 'red',
  backgroundColor: 'grey',
  border: '3px solid red',
};

const Notification = ({ message }) => {
  let style = null;

  let notification = '';

  if (message === 'OK') {
    style = success;
    notification = 'a new blog has been posted';
  } else if (message === 'BAD') {
    style = warning;
    notification = 'wrong username or password';
  }

  if (message === null) {
    return null;
  }

  return (
    <div>
      {
        message === null
          ? null
          : (
            <div style={style}>
              <p>{notification}</p>
            </div>
          )
      }
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
Notification.defaultProps = {
  message: null,
};

export default Notification;
