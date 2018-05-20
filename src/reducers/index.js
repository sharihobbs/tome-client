import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as reducerForm} from 'redux-form';

// import all reducers
//import searchReducer from './searchReducer';
import booksReducer from './booksReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  //searchReducer,
  booksReducer,
  loginReducer,
  form: reducerForm,
  routing: routerReducer
});

export default rootReducer;
