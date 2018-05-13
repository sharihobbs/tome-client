import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tomeActions from '../../actions/tomeActions';
import PropTypes from 'prop-types';

import './reading-list.css';
import '../grid.css';


export default function ReadingList(props) {
  const readBooks = [{
            id: 1111,
            thumbnail: 'https://books.google.com/books/content?id=99Uo01-ptl4C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70iEdSDG5MbRu4RjdgY7fUI2cqvcq1Lgck5A5QzHhrYkP4QUDo7PUSdnPGOD1AHCLngSTIdRdNEpicf5tfx23E_X7S6nW0UscR4Qt6dkrvl-KkkzQsenIdwY9vCPkbrMOyShJMk',
            title: 'Rilke\'s Book of Hours: Love Poems to God',
            author: 'Anita Barrows',
            isbn: 9781440628320,
            note: ''
          },
          {
            id: 2222,
            thumbnail: 'https://books.google.com/books/content?id=opamCQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE722kdG3Y2z1m8xr2FO9IaVSNnjJW7vJ10heMrOBkRHP8-EXMAyCdVVA0GQzrithKX3doCpqkkysVOxnqbcRw08-p1W1tW1jy9Zxoey_RMTtoILff8Cakr5X60moeOLT932SDv0w',
            title: 'Spark Joy: An Illustrated Master Class on the Art of Organizing and Tidying Up',
            author: 'Marie Kondo',
            isbn: 9781607749738,
            note: ''
          },
          {
            id: 3333,
            thumbnail: 'https://books.google.com/books/content?id=1V5BBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71myvtNGspnhd37hFw1IfeShGU2jM3dyWpkE46UcsdE9H2cRyS72ZfhltczEw1x065iLfWMIjKrBXaV1Dx0Dvr2XYHABKk3YT3W6dw99R_L6Yb3XEC77fOKSYXyDFqLH2HDmxwL',
            title: 'Joe: The Coffee Book',
            author: 'Jonathan Rubinstein',
            isbn: 9780762785834,
            note: ''
          },
          {
            id: 4444,
            thumbnail: 'https://books.google.com/books/content?id=ujYYAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71TQhpYDuhM42TosLbK4yJC0dbGMA3Zj6GgxCs0rOi6oLsAjOxJIgE6aCKGdLDiZoJ3ehvwowAJuRm_CWZ3DYehbdyFxSB08WyArUubeIsBJRO1HqOQ0frAoTlDr_S6Cva7I_Z-',
            title: 'Mindful Parenting: Simple and Powerful Solutions for Raising Creative, Engaged, Happy Kids in Today\'s Hectic World',
            author: 'Kristen Race',
            isbn: 9781250020314,
            note: ''
          },
          {
            id: 5555,
            thumbnail: 'https://books.google.com/books/content?id=GXppCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71w00ltfwCzUdU6DCrW4Xg1op5I3C6C8e5FfMgclVTY77OgoNQKwJ_m2a9nhQBRFOTdzhoDjXmw7pjn0HXhL1fRkq-J2wYeYFeHL0a-iXBnXITkcqoPCVfpRdR1ttByqQM0ziPs',
            title: 'Fodor\'s Germany',
            author: 'Fodor\'s Travel Guides',
            isbn: 9781101880340,
            note: ''
          },
          {
            id: 6666,
            thumbnail: 'https://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71rsX5V84tAv9CAea9G40jVeu8enNyolJfpn487raB2grLMK7TEH0iS3_zfYz3AgDUt-QuCCGYlxj3x-lfGbKySMMQox3crpTYZsnB-nGqfTxhXIOBdDRVQNXeyDohbWZq1zLcY',
            title: 'JavaScript: The Good Parts: The Good Parts',
            author: 'Douglas Crockford',
            isbn: 9780596554873,
            note: ''
          }];
  const books = this.state.books.map(book =>
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
              <button className="delete">Delete</button>
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

// const mapStateToProps = (state, props) => {
//     const listId = props.match.params.listId;
//     const list = state[listId];
//     return {
//         listId,
//         listName: list.name,
//         reading: Object.keys(list.books).map(bookId =>
//             list.emails[bookId]
//         )
//     };
// };

// export default connect(mapStateToProps)(ReadingList);
