import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteBook} from '../actions/actionTypes';
import './reading-list.css';
import '../grid.css';

class ReadingList extends React.Component {
  render() {
    const books = this.props.readingBooks.map(book =>
      <li className="reading" key={book.id}>
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
              <textarea rows="4" maxLength="140" className="note" defaultValue={book.note}></textarea>
              <div className="btn-wrapper">
                <button className="delete" onClick={() => this.props.deleteBook(book)}>Remove Book</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    );

    return (
      <div className="row">
        <h1 className="list-title"> My Reading List</h1>
        <ul className="reading-list">{books}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoginSuccess: state.loginReducer.isLoginSuccess,
    loginError: state.loginReducer.loginError,
    readingBooks: state.booksReducer.readingBooks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteBook: deleteBook}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ReadingList);
