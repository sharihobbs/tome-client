import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import readingBooks from './reading-books';
import resultsBooks from './results-books';

const rootReducer = combineReducers({readingBooks, resultsBooks, routing: routerReducer});

export default rootReducer;
