/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_USERS':
      return action.data;
    default:
      return state;
  }
};

export default usersReducer;
