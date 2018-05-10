import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import TitleCard from './title-card';
import Login from './login';
import Header from './header';
import SearchForm from './search-form';
import ReadingList from './reading-list';

export default function Tome(props) {
    return (
      <Router>
        <div>
          <Header />
          <main role="main">
            <Route exact path="/" component={TitleCard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={SearchForm} />
            <Route exact path="/readinglist" component={ReadingList} />
          </main>
        </div>
      </Router>
    );
  }
