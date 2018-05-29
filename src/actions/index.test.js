import {API_BASE_URL} from '../config';
import Enzyme  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {
    fetchReadingList,
    deleteBook,
    bookSearch,
    addBook
  } from './index';

import {
    searchBookSuccess,
    addBookSuccess,
    deleteBookSuccess,
    fetchReadingListSuccess
} from './actionTypes';

Enzyme.configure({ adapter: new Adapter() });

// fetchReadingList
describe('fetchReadingList', () => {
  it('should dispatch fetchReadingListSuccess', () => {
    const results = {
      books:[]
    };

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
            return results;
        }
      })
    );

    const dispatch = jest.fn();
    return fetchReadingList()(dispatch)
    .then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/readinglist/books`);
      expect(dispatch).toHaveBeenCalledWith(fetchReadingListSuccess(results.books))
    })
  })
})

// deleteBook
describe('deleteBook', () => {
  it('should dispatch deleteBookSuccess', () => {
    const idNum = 12345;
    const methodType = {
      method: 'DELETE'
    };
    const book = {
      id: idNum
      };

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json() {
            return book;
        }
      })
    );

    const dispatch = jest.fn();
    return deleteBook(book)(dispatch)
    .then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/readinglist/books/remove/${book.id}`, methodType);
      expect(dispatch).toHaveBeenCalledWith(deleteBookSuccess(book))
    })
  })
})

// bookSearch
describe('bookSearch', () => {
  it('should dispatch searchBookSuccess', () => {
    const results = 'anything';
    const term = 'cats';
    const page = '1';
    const searchBody = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: term,
        page: page
      })
    };

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
            return results;
        }
      })
    );

    const dispatch = jest.fn();
    return bookSearch(term, page)(dispatch)
    .then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/search`, searchBody);
      expect(dispatch).toHaveBeenCalledWith(searchBookSuccess(results, term))
    })
  })
})

// addBook
describe('addBook', () => {
  it('should add book to ReadingList', () => {
    const results = 'anything';
    const book = [{
        title: 'title',
        author: 'author',
        thumbnail: 'thumbnail',
        isbn: 1234567891,
        note: 'note',
        googleId: 'googleId'
    }];
    const author = book.authors && book.authors[0]
    const isbn = book.industryIdentifiers &&
             book.industryIdentifiers[0] &&
             book.industryIdentifiers[0].identifier
    const searchBody = {
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
    };

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
            return results;
        }
      })
    );

    const dispatch = jest.fn();
    return addBook(book)(dispatch)
    .then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/readinglist/books/add`, searchBody);
      expect(dispatch).toHaveBeenCalledWith(addBookSuccess(book))
    })
  })
})

