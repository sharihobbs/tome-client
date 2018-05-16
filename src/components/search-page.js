import React from 'react';
import SearchForm from './search-form';
import TitleCard from './title-card';

class SearchPage extends React.Component {

  render() {
    return (
      <div>
        <TitleCard />
        <SearchForm />
      </div>
    );
  }
}

export default SearchPage;
