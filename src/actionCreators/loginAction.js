/* eslint-disable arrow-body-style */
// import loginService from '../services/login';

const loginAction = (user) => {
  return {
    type: 'LOGGED_IN',
    data: user,
  };
};

export default loginAction;
