import React from 'react';
import {Link} from 'react-router-dom'
import './navigation.css';

export default function Navigation() {
  return (
    <nav>
      <Link
        to="/"
        className="home"
        aria-label="Home"
      >
        Home{'  '}|{'  '}
      </Link>
      <Link
        to="/login"
        className="login"
        aria-label="Login"
      >
        Login{'  '}|{'  '}
      </Link>
      <Link
        to="/logout"
        className="logout"
        aria-label="Logout"
      >
        Logout{'  '}|{'  '}
      </Link>
      <Link
        to="/readinglist"
        className="list"
        aria-label="My Reading List"
      >
        My Reading List{'  '}|{'  '}
      </Link>
      <Link
        to="/search"
        className="search"
        aria-label="Search"
      >
        Search
      </Link>
    </nav>
  );
}
