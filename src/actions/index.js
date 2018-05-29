import {API_BASE_URL} from '../config';
import {
  fetchReadingListSuccess,
  deleteBookSuccess,
  searchBookSuccess,
  addBookSuccess,
  setLoginSuccess,
  setLoginError,
  resetResults
} from './actionTypes';

// Reading List Action Creators
export const fetchReadingList = () => dispatch => {
  return fetch(`${API_BASE_URL}/readinglist/books`)
  .then(res => {
    if (!res.ok) {
        return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(results => {
    dispatch(fetchReadingListSuccess(results.books));
  })
};

export const deleteBook = (book) => dispatch => {
  return fetch(`${API_BASE_URL}/readinglist/books/remove/${book.id}`, {
    method: 'DELETE'
  })
  .then(dispatch(deleteBookSuccess(book)))
};

// Book Search Action Creators
export const bookSearch = (term, page) => dispatch => {
  return fetch(`${API_BASE_URL}/search`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: term,
      page: page
    })
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(results => {
    dispatch(searchBookSuccess(results, term))
  })
};

export const addBook = (book) => dispatch => {
  let author = book.authors && book.authors[0]
  let isbn = book.industryIdentifiers &&
             book.industryIdentifiers[0] &&
             book.industryIdentifiers[0].identifier
  return fetch(`${API_BASE_URL}/readinglist/books/add`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: book.title || '',
      author: author || '',
      thumbnail: book.thumbnail || '',
      isbn: isbn || book.id,
      note: book.note,
      googleId: book.googleId
    })
  })
  .then(res => {
    if (!res.ok) {
        return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(() => {
    dispatch(addBookSuccess(book))
  })
};

// Login/Logout Action Creators
export const login = (email, password) => dispatch => {
  dispatch(setLoginSuccess(false));
  dispatch(setLoginError(null));

  makeLoginCall(email, password, error => {
    if (error) {
      return dispatch(setLoginError(error));
    } else {
      return dispatch(setLoginSuccess(true));
    }
  });
}

export const isLoggedIn = () => dispatch => {
  let user = JSON.parse(localStorage.getItem('user'));
  if (user && user.isLoginSuccess === true) {
    return dispatch(setLoginSuccess(true))
  }
}

export const resetState = () => dispatch => {
  return dispatch(resetResults())
}

export const logout = () => dispatch => {
  localStorage.removeItem('user');
  return dispatch(setLoginSuccess(false))
}

function makeLoginCall(email, password, callback) {
  setTimeout(() => {
    if (email === 'reader@tome.com' && password === 'reader') {
      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'))
    }
  }, 100);
}
