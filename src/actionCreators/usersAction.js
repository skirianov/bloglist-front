/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
import usersService from '../services/users';

const usersAction = () => {
  return async dispatch => {
    const users = await usersService.getAll();
    dispatch({
      type: 'ALL_USERS',
      data: users,
    });
  };
};

export default usersAction;
