export const SAVE_BOOK = 'SAVE_BOOK';
export const READ_BOOK = 'READ_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const EDIT_NOTE = 'EDIT_NOTE';
export const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

// Save a book from the search results
export const saveBook = book => ({
  type: SAVE_BOOK,
  book
})

// Mark a book as read
export const readBook = bookId => ({
  type: READ_BOOK,
  bookId
})

// Delete a book from the reading list
export const deleteBook = bookId => ({
  type: DELETE_BOOK,
  bookId
})

// Edit Note
export const editNote = (bookId, text) => ({
  type: EDIT_NOTE,
  bookId,
  text
})

// Login reducers
export const setLoginSuccess = isLoginSuccess => ({
  type: SET_LOGIN_SUCCESS,
  isLoginSuccess
})

export const setLoginError = loginError => ({
  type: SET_LOGIN_ERROR,
  loginError
})
