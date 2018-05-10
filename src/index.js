import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Tome from './components/tome';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <Tome />,
document.getElementById('root'),
registerServiceWorker()
);


