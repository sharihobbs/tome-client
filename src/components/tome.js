import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react-router';

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
            <Route path="/login" component={Login} />
            <Route path="/search" component={SearchForm} />
            <Route path="/readinglist" component={ReadingList} />
          </main>
        </div>
      </Router>
    );
  }
