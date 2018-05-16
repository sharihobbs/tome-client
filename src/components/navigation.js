import React from 'react';

import './navigation.css';

export default function Navigation() {
  return (
    <nav role="navigation">
      <a
        href="/"
        className="home"
        aria-label="Home"
      >
        Home{'  '}|{'  '}
      </a>
      <a
        href="/login"
        className="login"
        aria-label="Login"
      >
        Login{'  '}|{'  '}
      </a>
      <a
        href="/readinglist"
        className="list"
        aria-label="My Reading List"
      >
        My Reading List{'  '}|{'  '}
      </a>
      <a
        href="/search"
        className="search"
        aria-label="Search"
      >
        Search
      </a>
    </nav>
  );
}


