import React from 'react';
import SearchForm from './search-form';
import SearchResults from './search-results';
import TitleCard from './title-card';

class SearchPage extends React.Component {

  render() {
    return (
      <div>
        <TitleCard />
        <SearchForm />
        <SearchResults />
      </div>
    );
  }
}

export default SearchPage;
