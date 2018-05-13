import {combineReducers} from 'redux';
import books from './tomeReducer';

const rootReducer = combineReducers({
  books
});

export default rootReducer;
