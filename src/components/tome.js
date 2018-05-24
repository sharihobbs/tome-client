import React from 'react';
import {
  Router,
  Route
} from 'react-router-dom';
import {history} from '../support/history';
import PrivateRoute from './private-route';
import Instructions from './instructions';
import LoginForm from './login';
import Logout from './logout';
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
            <Route exact path="/logout" component={Logout} />
            <PrivateRoute exact path="/readinglist" component={ReadingList} />
            <PrivateRoute exact path="/search" component={SearchPage} />
            <PrivateRoute exact path="/results" component={SearchResults} />
        </div>
      </Router>
    )
  }
}

export { Tome as App };
