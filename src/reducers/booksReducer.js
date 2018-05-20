import {SAVE_BOOK, DELETE_BOOK} from '../actions/actionTypes';
import resultsBooks from '../data/results-books';
import readingBooks from '../data/reading-books';

const initialState = {
  resultsBooks,
  readingBooks
};

export const booksReducer = (state=initialState, action) => {
  switch (action.type) {
    case SAVE_BOOK:
      console.log('save action.book:', action.book)
      return Object.assign({}, state, {
        readingBooks: [...state.readingBooks, action.book]
      });
    case DELETE_BOOK:
      console.log(`delete action.book: ${JSON.stringify(action.book)}`)
      return Object.assign({}, state, {
        readingBooks: state.readingBooks.filter(book => book.id !== action.book.id)
      });
    default:
      return state;
  }
};

export default booksReducer;
