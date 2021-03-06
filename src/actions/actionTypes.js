export const SEARCH_BOOK_SUCCESS = 'SEARCH_BOOK_SUCCESS';
export const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS';
export const DELETE_BOOK = 'DELETE_BOOK';
export const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
export const FETCH_READING_LIST_SUCCESS = 'FETCH_READING_LIST_SUCCESS';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
export const USER_LOGOUT = 'USER_LOGOUT';
export const RESET_RESULTS = 'RESET_RESULTS';

// Handle success on book search
export const searchBookSuccess = (books, term) => ({
  type: SEARCH_BOOK_SUCCESS,
  books,
  term
})

// Fetch ReadingList books from the api
export const fetchReadingListSuccess = books => ({
  type: FETCH_READING_LIST_SUCCESS,
  books
})

// Save a book from the search results
export const addBookSuccess = book => ({
  type: ADD_BOOK_SUCCESS,
  book
})

// Delete a book from the reading list
export const deleteBookSuccess = book => ({
  type: DELETE_BOOK,
  book
})

// Login success
export const setLoginSuccess = isLoginSuccess => {
  localStorage.setItem('user', JSON.stringify({isLoginSuccess}));
  return ({
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  })
}

// Login error
export const setLoginError = loginError => ({
  type: SET_LOGIN_ERROR,
  loginError
})

// Logout
export const userLogout = isLogout => ({
  type: USER_LOGOUT,
  isLogout
})

// Reset resultsBooks to initial state
export const resetResults = resultsBooks => ({
  type: RESET_RESULTS,
  resultsBooks
})

