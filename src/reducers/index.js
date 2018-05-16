import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as reducerForm} from 'redux-form';

import readingBooks from './reading-books';
import resultsBooks from './results-books';
import loginUser from './login-user';

const rootReducer = combineReducers({
  readingBooks,
  resultsBooks,
  loginUser,
  form: reducerForm,
  routing: routerReducer});

export default rootReducer;
