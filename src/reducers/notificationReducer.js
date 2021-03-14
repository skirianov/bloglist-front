/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
const notificationReducer = (state = '', action) => {
  switch (action.type) {
    case 'NEW_MESSAGE':
      return state.replace(state, `${action.message}`);
    default:
      return state;
  }
};

export default notificationReducer;
