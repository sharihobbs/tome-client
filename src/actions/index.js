import {API_BASE_URL} from '../config';
import {
  fetchReadingListSuccess,
  deleteBookSuccess,
  searchBookSuccess,
  addBookSuccess,
  setLoginSuccess,
  setLoginError
} from './actionTypes';

export const fetchReadingList = () => dispatch => {
  fetch(`${API_BASE_URL}/readinglist/books`)
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
  fetch(`${API_BASE_URL}/readinglist/books/remove/${book.id}`, {
    method: 'DELETE'
  })
  .then(dispatch(deleteBookSuccess(book)))
};

export const bookSearch = (term, page) => dispatch => {
  fetch(`${API_BASE_URL}/search`, {
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
  fetch(`${API_BASE_URL}/readinglist/books/add`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: book.title || '',
      author: author || '',
      thumbnail: book.thumbnail || '',
      isbn: book.industryIdentifiers[0].identifier,
      note: book.note
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
  if (user.isLoginSuccess === true) {
    return dispatch(setLoginSuccess(true))
  }
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
