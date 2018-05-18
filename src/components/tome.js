import React from 'react';

// importing router
import {
  Router,
  Route,
  Switch
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


export default function Tome(props) {
  console.log(`tome props: ${JSON.stringify(props)}`)
  return (
    <Router history={history}>
      <div>
          <Header />
          <Switch>
          <Route exact path="/" component={Instructions} />
          <PrivateRoute path="/readinglist" component={ReadingList} />
          <Route path="/login" component={LoginForm} />
          <Route path="/search" component={SearchPage} />
          <Route path="/results" render={(props) => (
            <SearchResults {...props} resultsBooks={resultsBooks}/>
            )} />
          </Switch>
      </div>
    </Router>
  );
}
