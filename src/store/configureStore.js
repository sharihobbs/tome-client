import {createStore, applyMiddleware} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux'
import createBrowserHistory from '../components/history';

// import Thunk and Logger
import thunk from 'redux-thunk';
import logger from 'redux-logger';


// import root reducer
import rootReducer from '../reducers/index';


// const initialState = {
// };

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, logger)
  );

export const history = syncHistoryWithStore(createBrowserHistory, store);


export default store;
