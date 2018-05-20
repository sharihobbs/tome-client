import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveBook} from '../actions/actionTypes';
import './search-results.css';
import '../grid.css';
import _ from 'lodash';

class SearchResults extends React.Component {
constructor(props) {
    super(props);
    this.state = {}
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
                <p className="author">{book.author}</p>
                <p className="isbn">ISBN: {book.isbn}</p>
            </div>
            <div className="note-wrapper">
              <label htmlFor="note" className="note-label">Note:</label>
              <textarea name="note" rows="4" maxLength="140" className="new-note" onChange={(e) => this.setState({note: e.target.value})}></textarea>
              <div className="btn-wrapper">
                <button className="save-btn" onClick={() => this.props.saveBook(_.merge({}, book, {note: this.state.note}))}>Save to My Reading List</button>
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
}

function mapStateToProps(state) {
  return {
    resultsBooks: state.booksReducer.resultsBooks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({saveBook: saveBook}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
