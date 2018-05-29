import {booksReducer} from './booksReducer';
import {addBookSuccess, deleteBookSuccess, fetchReadingListSuccess} from '../actions/actionTypes';


describe('booksReducer', () => {
  const book = {
  title: 'title',
  author: 'author',
  thumbnail: 'thumbnail',
  isbn: 'isbn',
  note: 'note',
  googleId: 'googleId'
  };

  const books = [{book}, {book}, {book}];

  it('Should add a book to the Reading List', () => {
      let state;
      state = booksReducer(state, addBookSuccess(book));
      expect(state).toEqual({readingBooks: [book]});
  });

  it('Should delete a book from the Reading List', () => {
      let state;
      state = booksReducer(state, deleteBookSuccess(book));
      expect(state).toEqual({readingBooks: []});
  });

  it('Should fetch the Reading List', () => {
      let state;
      state = booksReducer(state, fetchReadingListSuccess(books));
      expect(state).toEqual({readingBooks: books});
  });
});
