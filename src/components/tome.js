import React from 'react';

// importing router
import {Router, Route} from 'react-router-dom';

// store imports
// import {Provider} from 'react-redux';
//import store, {history} from '../store/configureStore';
import {history} from '../store/configureStore';

import readingBooks from '../data/reading-books';


// importing components
import Instructions from './instructions';
import Login from './login';
import Header from './header';
import SearchPage from './search-page';
import ReadingList from './reading-list';


export default function Tome() {
    return (
      <Router history={history}>
        <div>
            <Header />
            <Route path="/" component={Instructions}> </Route>
            <Route path="/login" component={Login}> </Route>
            <Route path="/search" component={SearchPage}> </Route>
            <Route path="/readinglist" render={(props) => (
              <ReadingList {...props} readingBooks={readingBooks} />
              )} />
        </div>
      </Router>
    );
  }
