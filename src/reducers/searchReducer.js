import {SEARCH_BOOK_SUCCESS, RESET_RESULTS} from '../actions/actionTypes';
import _ from 'lodash'

const initialState = {
  resultsBooks: []
};

export const searchReducer = (state=initialState, action) => {
  switch (action.type) {
    case SEARCH_BOOK_SUCCESS:
      return Object.assign({}, state, {
        resultsBooks: _.uniqBy([...state.resultsBooks, ...action.books], 'id'),
        term: action.term
      });
    case RESET_RESULTS:
      return Object.assign({}, state, {
        resultsBooks: []
      });
    default:
      return state;
  }
};

export default searchReducer;
