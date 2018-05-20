import {createStore, applyMiddleware} from 'redux';

// import Thunk and Logger
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// import root reducer
import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );

export default store;
