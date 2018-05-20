export const SEARCH_BOOK = 'SEARCH_BOOK';
export const SAVE_BOOK = 'SAVE_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
// export const SAVE_NOTE = 'SAVE_NOTE';

// Search for Books
export const searchBook = terms => ({
  type: SEARCH_BOOK,
  terms
})

// Save a book from the search results
export const saveBook = book => {
  return ({
    type: SAVE_BOOK,
    book
  })
}

// // Save note value to state
// export const saveNote = text => ({
//   type: SAVE_NOTE,
//   text
// })

// Delete a book from the reading list
export const deleteBook = book => ({
  type: DELETE_BOOK,
  book
})

// Login actions
export const setLoginSuccess = isLoginSuccess => ({
  type: SET_LOGIN_SUCCESS,
  isLoginSuccess
})

export const setLoginError = loginError => ({
  type: SET_LOGIN_ERROR,
  loginError
})

