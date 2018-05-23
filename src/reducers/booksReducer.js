import {ADD_BOOK_SUCCESS, DELETE_BOOK, FETCH_READING_LIST_SUCCESS} from '../actions/actionTypes';

const initialState = {
  readingBooks: []
};

export const booksReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_READING_LIST_SUCCESS:
      console.log('action:', action)
      return Object.assign({}, state, {
        readingBooks: action.books
      });
    case ADD_BOOK_SUCCESS:
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
