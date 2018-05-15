import React from 'react';
import SearchForm from './search-form';
import TitleCard from './title-card';
import SearchResults from './search-results';
import resultsBooks from '../data/results-books';

class SearchPage extends React.Component {

  render() {
    return (
      <div>
        <TitleCard />
        <SearchForm />
        <SearchResults resultsBooks={resultsBooks} />
      </div>
    );
  }
}

export default SearchPage;
