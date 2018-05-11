import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Tome from './components/tome';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <Tome />
  </Provider>,
document.getElementById('root'),
registerServiceWorker()
);


