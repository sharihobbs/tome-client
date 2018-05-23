import {SEARCH_BOOK_SUCCESS, SEARCH_BOOK_ERROR} from '../actions/actionTypes';

const initialState = {
  resultsBooks: []
};

export const searchReducer = (state=initialState, action) => {
  switch (action.type) {
    case SEARCH_BOOK_ERROR:
      return Object.assign({}, state, {
        searchBookError: action.searchBookError
      });
    case SEARCH_BOOK_SUCCESS:
      return Object.assign({}, state, {
        resultsBooks: action.books
      })
    default:
      return state;
  }
};

export default searchReducer;
