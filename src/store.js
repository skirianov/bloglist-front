/* eslint-disable import/no-extraneous-dependencies */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import blogsReducer from './reducers/blogsReducer';
import notificationReducer from './reducers/notificationReducer';
import userReducer from './reducers/userReducer';
import usersReducer from './reducers/usersReducer';

const reducer = combineReducers({
  blogs: blogsReducer,
  notification: notificationReducer,
  user: userReducer,
  users: usersReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
