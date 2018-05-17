// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state (return state)

import {SAVE_BOOK} from '../actions/actionTypes';

const initialState = {
  resultsBooks: []
};

export const resultsReducer = (state=initialState, action) => {
  if (action.type === SAVE_BOOK) {
    console.log(`action: ${JSON.stringify(action)}`)
    return Object.assign({}, state, {
      resultsBooks: [...state.resultsBooks, action.book]
    });
  }
  return state
};

export default resultsReducer;
