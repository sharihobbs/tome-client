import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {fetchReadingList, deleteBook} from '../actions/index';
import './reading-list.css';
import '../grid.css';

export class ReadingList extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchReadingList()
  }

  onDelete(book) {
    this.props.deleteBook(book)
  }

  render() {
    const books = this.props.readingBooks.map(book =>
      <li className="reading" key={book.id}>
        <div className="col-4">
          <div className="book">
            <div className="upper-wrapper">
              <div className="img-container">
                <img src={book.thumbnail} className="thumbnail" alt={book.title}></img>
              </div>
                <p className="googleId hidden">{book.googleId}</p>
                <p className="title">{book.title}</p>
                <p className="author">{book.author}</p>
                <p className="isbn">ISBN: {book.isbn}</p>
            </div>
            <div className="note-wrapper">
              <label htmlFor="note" className="note-label">Note:</label>
              <p className="note">{book.note}</p>
              <div className="btn-wrapper">
                <button className="delete" onClick={() => this.onDelete(book)}>Remove Book</button>
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

ReadingList.propTypes = {
  fetchReadingList: PropTypes.func.isRequired,
  loginError: PropTypes.string,
  readingBooks: PropTypes.array,
  deleteBook: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    loginError: state.loginReducer.loginError,
    readingBooks: state.booksReducer.readingBooks
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReadingList: () => dispatch(fetchReadingList()),
    deleteBook: (book) => dispatch(deleteBook(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadingList);
