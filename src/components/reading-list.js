import React from 'react';
import {connect} from 'react-redux';
//import readingBooks from '../data/reading-books';


import './reading-list.css';
import '../grid.css';


function ReadingList(props) {
  console.log('reading props:', props);
  const books = props.readingBooks.map(book =>
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
            <textarea rows="4" maxLength="140" className="note">{book.note}</textarea>
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

export default connect(mapStateToProps)(ReadingList);
