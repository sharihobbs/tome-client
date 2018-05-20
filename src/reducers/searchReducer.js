import {SEARCH_BOOK} from '../actions/actionTypes';

const initialState = {
  terms: ''
};

export const searchReducer = (state=initialState, action) => {
  if (action.type === SEARCH_BOOK) {
    // return Object.assign({}, state, {
    //   terms: [...state.terms, action.terms]
    // });
  }
  return state
};

export default searchReducer;
