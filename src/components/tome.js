import React from 'react';

// importing router
import {
  Router,
  Route,
  Redirect
} from 'react-router-dom';

// store imports
import {history} from '../store/configureStore';

//mock data import
import readingBooks from '../data/reading-books';
import resultsBooks from '../data/results-books';

// import authentication method
import makeLoginCall from '../reducers/loginReducer';


// importing components
import Instructions from './instructions';
import LoginForm from './login';
import Header from './header';
import SearchPage from './search-page';
import ReadingList from './reading-list';
import SearchResults from './search-results';

// create PrivateRoute to handle redirect
const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    makeLoginCall.isLoginSuccess === false
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login'
      }} />
  )} />
)

export default function Tome() {
    return (
      <Router history={history}>
        <div>
            <Header />
            <Route exact path="/" component={Instructions} />
            <Route path="/login" component={LoginForm} />
            <Route path="/search" component={SearchPage} />
            <Route path="/results" render={(props) => (
              <SearchResults {...props} resultsBooks={resultsBooks}/>
              )} />
            <PrivateRoute path="/readinglist" render={(props) => (
              <ReadingList {...props} readingBooks={readingBooks} />
              )} />
        </div>
      </Router>
    );
  }
