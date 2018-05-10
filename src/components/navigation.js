import React from 'react';

import './navigation.css';

export default function Navigation() {
  return (
    <nav role="navigation">
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
        aria-label="Reading List"
      >
        Reading List{'  '}|{'  '}
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


