import React from 'react';
import BottomScrollListener from 'react-bottom-scroll-listener';
import {connect} from 'react-redux';
import {addBook, bookSearch} from '../actions/index';
import './search-results.css';
import '../grid.css';
import _ from 'lodash';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
      page: 1
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    let nextPage = this.state.page + 1
    this.setState({page: nextPage})
    this.props.dispatch(bookSearch(this.props.searchTerm, this.state.page));
  }

  onSave(book) {
    this.props.dispatch(addBook(book))
  }

  render() {
    const books = this.props.resultsBooks.map(book =>
      <li className="results" key={book.id}>
        <div className="col-4">
          <div className="book">
            <div className="upper-wrapper">
              <div className="img-container">
                <img src={book.thumbnail} className="thumbnail" alt={book.title}></img>
              </div>
                <p className="title">{book.title}</p>
                <p className="author">{book.authors && book.authors.join(', ')}</p>
                <p className="isbn">ISBN: {book.industryIdentifiers && book.industryIdentifiers[0].identifier}</p>
            </div>
            <div className="note-wrapper">
              <label htmlFor="note" className="note-label">Note:</label>
              <textarea name="note" rows="4" maxLength="140" className="new-note" onChange={(e) => this.setState({note: e.target.value})}></textarea>
              <div className="btn-wrapper">
                <button className="save-btn" onClick={() => this.onSave(_.merge({}, book, {note: this.state.note}))}>Save to My Reading List</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    );

    return (
      <div className="row">
        <ul className="search-results">{books}</ul>
        <BottomScrollListener onBottom={this.handleScroll} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    resultsBooks: state.searchReducer.resultsBooks,
    searchTerm: state.searchReducer.term
  };
}

export default connect(mapStateToProps)(SearchResults);
