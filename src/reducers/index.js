import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as reducerForm} from 'redux-form';

import readingReducer from './readingReducer';
import resultsReducer from './resultsReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  readingReducer,
  resultsReducer,
  loginReducer,
  form: reducerForm,
  routing: routerReducer
});

export default rootReducer;
