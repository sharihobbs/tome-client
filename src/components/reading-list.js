import React from 'react';
import {connect} from 'react-redux';

import './reading-list.css';
import '../grid.css';

export function ReadingList(props) {
  const books = props.reading.map(book =>
    <li className="reading" key={book.id}>
      <div className="col-4">
        <div className="book">
          <div className="upper-wrapper">
            <div className="img-container">
              <img src={book.thumbnail} className="thumbnail" alt={book.title}></img>
              <p className="title">{book.title}</p>
              <p className="author">{book.author}</p>
              <p className="isbn">ISBN: {book.isbn}</p>
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
        </div>
      </div>
    </li>
  );

  return (
    <div className="row">
      <h1>Reading List</h1>
        <ul className="reading-list">{books}</ul>
    </div>
  );
}

const mapStateToProps = (state, props) => {
    const listId = props.match.params.listId;
    const list = state[listId];
    return {
        listId,
        listName: list.name,
        reading: Object.keys(list.books).map(bookId =>
            list.emails[bookId]
        )
    };
};

export default connect(mapStateToProps)(ReadingList);
