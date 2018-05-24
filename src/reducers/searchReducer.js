import {SEARCH_BOOK_SUCCESS, SEARCH_BOOK_ERROR} from '../actions/actionTypes';
import _ from 'lodash'

const initialState = {
  resultsBooks: []
};

export const searchReducer = (state=initialState, action) => {
  _.map(action.books, book => {
    console.log(book.id, book.title, book.authors)
  })
  switch (action.type) {
    case SEARCH_BOOK_ERROR:
      return Object.assign({}, state, {
        searchBookError: action.searchBookError
      });
    case SEARCH_BOOK_SUCCESS:
      return Object.assign({}, state, {
        resultsBooks: [...state.resultsBooks, ...action.books],
        term: action.term
      });
    default:
      return state;
  }
};

export default searchReducer;


    // case RESET:
    //   return initialState;
