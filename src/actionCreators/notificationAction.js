/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
const notificationAction = (message) => {
  return {
    type: 'NEW_MESSAGE',
    message,
  };
};

export default notificationAction;
