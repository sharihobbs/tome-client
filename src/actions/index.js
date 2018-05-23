import {API_BASE_URL} from '../config';
import {
  fetchReadingListSuccess,
  deleteBookSuccess,
  searchBookSuccess,
  addBookSuccess
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

export const bookSearch = (term) => dispatch => {
  console.log('term', term)
  fetch(`${API_BASE_URL}/search`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: term
    })
  })
  .then(res => {
    if (!res.ok) {
        return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(results => {
    console.log('results:', results)
    dispatch(searchBookSuccess(results))
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
  .then(results => {
    console.log('results:', results)
    dispatch(addBookSuccess(book))
  })
};
