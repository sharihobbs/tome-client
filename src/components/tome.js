import React from 'react';

// importing router
import {
  Router,
  Route
} from 'react-router-dom';

// store imports
import {history} from '../support/history';

// import mock data
import resultsBooks from '../data/results-books';

// import components
import PrivateRoute from './private-route';
import Instructions from './instructions';
import LoginForm from './login';
import Header from './header';
import SearchPage from './search-page';
import ReadingList from './reading-list';
import SearchResults from './search-results';


class Tome extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
            <Header/>
            <Route exact path="/" component={Instructions} />
            <Route exact path="/login" component={LoginForm} />
            <PrivateRoute exact path="/readinglist" component={ReadingList} />
            <PrivateRoute exact path="/search" component={SearchPage} />
            <Route exact path="/results" render={(props) => (
              <SearchResults {...props} resultsBooks={resultsBooks}/>
              )} />
        </div>
      </Router>
    )
  }
}

export { Tome as App };
