import React from 'react';
import {connect} from 'react-redux';

import './reading-list.css';
import '../grid.css';

class ReadingList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  console.log('reading props:', this.props);
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
                <button className="edit-note">Edit Note</button>
                <button className="read">Mark Read</button>
                <button className="delete">Delete Book</button>
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

const mapStateToProps = (state, props) => {
    console.log('state', state);
    return {
      readingBooks: state.readingReducer.readingBooks
    }
};


export default connect(mapStateToProps, null, null, {
  pure: false
})(ReadingList);


//export default connect(mapStateToProps)(ReadingList);



