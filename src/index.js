import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store/configureStore';
import Tome from './components/tome';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// ReactDOM.render(
//   <Tome />,
// document.getElementById('root'),
// registerServiceWorker()
// );



ReactDOM.render(
  <Provider store={store}>
    <Tome />
  </Provider>,
document.getElementById('root'),
registerServiceWorker()
);


