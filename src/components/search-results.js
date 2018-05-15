import React from 'react';
import {connect} from 'react-redux';
//import resultsBooks from '../data/results-books';

import './search-results.css';
import '../grid.css';

function SearchResults(props) {
  console.log('results props:', props);
  const books = props.resultsBooks.map(book =>
    <li className="results" key={book.id}>
      <div className="col-4">
        <div className="book">
          <div className="upper-wrapper">
            <div className="img-container">
              <img src={book.thumbnail} className="thumbnail" alt={book.title}></img>
            </div>
              <p className="title">{book.title}</p>
              <p className="author">{book.author}</p>
              <p className="isbn">ISBN: {book.isbn}</p>
          </div>
          <div className="note-wrapper">
            <label htmlFor="note" className="note-label">Note:</label>
            <textarea rows="4" maxLength="140" className="note"></textarea>
            <div className="btn-wrapper">
              <button className="save-btn">Save to My Reading List</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );

  return (
    <div className="row">
      <h1 className="list-title">Search Results</h1>
      <ul className="search-results">{books}</ul>
    </div>
  );
}

const mapStateToProps = (state, props) => {
    return {
      id: state.id,
      thumbnail: state.thumbnail,
      title: state.title,
      author: state.author,
      isbn: state.isbn,
      note: state.note
    }
};

export default connect(mapStateToProps)(SearchResults);
