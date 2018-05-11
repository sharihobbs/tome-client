import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import tomeReducer from './reducers';

export default createStore(
    tomeReducer,
    applyMiddleware(thunk)
);
