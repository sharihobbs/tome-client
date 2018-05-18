import React from 'react';

// importing router
import {
  Router,
  Route
} from 'react-router-dom';

// store imports
import {history} from '../store/configureStore';

// import mock data
//import readingBooks from '../data/reading-books';
import resultsBooks from '../data/results-books';

// import components
import PrivateRoute from './private-route';
import Instructions from './instructions';
import LoginForm from './login';
import Header from './header';
import SearchPage from './search-page';
import ReadingList from './reading-list';
import SearchResults from './search-results';


export default function Tome() {
  return (
    <Router history={history}>
      <div>
          <Header/>
          <PrivateRoute path="/" component={ReadingList} />
          <Route path="/home" component={Instructions} />
          <Route path="/login" component={LoginForm} />
          <Route path="/search" component={SearchPage} />
          <Route path="/results" render={(props) => (
            <SearchResults {...props} resultsBooks={resultsBooks}/>
            )} />
      </div>
    </Router>
  );
}
