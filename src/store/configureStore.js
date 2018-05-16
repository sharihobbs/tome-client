import {createStore} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux'
import createBrowserHistory from '../components/history';

// import Thunk
// import thunk from 'redux-thunk';
  //applyMiddleware(thunk),

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
  initialState
  );

export const history = syncHistoryWithStore(createBrowserHistory, store);


export default store;
