// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state (return state)

import {READ_BOOK, EDIT_NOTE, DELETE_BOOK} from '../actions/actionTypes';

const initialState = {
  readingBooks: []
};

export const readingReducer = (state=initialState, action) => {
  if (action.type === READ_BOOK) {
    console.log(`action: ${JSON.stringify(action)}`)
    return Object.assign({}, state, {
      readingBooks: state.readingBooks.filter(book => book.id !== action.book.id)
    });
  }
  else if (action.type === EDIT_NOTE) {
    console.log(`action: ${JSON.stringify(action)}`)
    return Object.assign({}, state, {
      readingBooks: state.readingBooks.map(book => book.id === action.book.id ? action.book: book)
    });
  }
  else if (action.type === DELETE_BOOK) {
    console.log(`action: ${JSON.stringify(action)}`)
    return Object.assign({}, state, {
      items: state.readingBooks.filter(book => book.id !== action.book.id)
    });
  }
  return state
};

export default readingReducer;
