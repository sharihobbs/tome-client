import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import './index.css';
import Tome from './components/tome';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Tome />
  </Provider>,
document.getElementById('root'),
registerServiceWorker()
);


