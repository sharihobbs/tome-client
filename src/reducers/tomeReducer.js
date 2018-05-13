import initialState from './initialState';
import{SEARCH_BOOK, GET_BOOK, SAVE_BOOK, READ_BOOK, DELETE_BOOK} from '../actions/actionTypes';

export default function books(state = initialState.books, action) {
  let newState;
  switch (action.type) {
    case SEARCH_BOOK:
      console.log('SEARCH_BOOK Action')
      return action;
    case GET_BOOK:
      newState = action.books;
      console.log('GET_BOOK Action')
      return newState;
    default:
      return state;
  }
}

// export default function tomeReducer(state=initialState, action) {
//   if (action.type === SAVE_BOOK) {
//     return Object.assign({}, state, {
//         book: action.book
//     });
//   }
//   else if (action.type === READ_BOOK) {
//     return Object.assign({}, state, {
//         book: action.book
//     });
//   }
//   else if (action.type === LOGIN_USER) {
//     return Object.assign({}, state, {
//         user: action.user
//     });
//   }
//   else if (action.type === BOOK_SEARCH) {
//     return Object.assign({}, state, {
//         term: action.term
//     });
//   }
//   else if (action.type === DELETE_BOOK) {
//     return Object.assign({}, state, {
//         book: action.book
//     });
//   }
//   return state;
// }







