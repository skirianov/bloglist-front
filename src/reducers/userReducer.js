const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return action.data;
    case 'LOG_OUT':
      return null;
    default:
      return state;
  }
};

export default userReducer;
