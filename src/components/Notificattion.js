import React from 'react';
import { useSelector } from 'react-redux';

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

const Notification = () => {
  let style = null;
  let notification = '';

  const message = useSelector((state) => state);
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

Notification.defaultProps = {
  message: null,
};

export default Notification;
