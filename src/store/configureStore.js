import {createStore, applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux'
import createBrowserHistory from '../components/history';

// import Thunk and Logger
import thunk from 'redux-thunk';
import logger from 'redux-logger';


// import root reducer
import rootReducer from '../reducers/index';

// import data - mock for now
import readingBooks from '../data/reading-books';
import resultsBooks from '../data/results-books';

// create an object for the default data
const initialState = {
  readingBooks,
  resultsBooks
};

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, logger)
  );

export const history = syncHistoryWithStore(createBrowserHistory, store);


export default store;
