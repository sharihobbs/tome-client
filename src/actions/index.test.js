import {API_BASE_URL} from '../config';
import Enzyme  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {
    fetchReadingList,
    deleteBook,
    bookSearch,
    addBook,
    transformGoogleBook
  } from './index';

import {
    searchBookSuccess,
    addBookSuccess,
    deleteBookSuccess,
    fetchReadingListSuccess
} from './actionTypes';

Enzyme.configure({ adapter: new Adapter() });

const dispatch = jest.fn();

function setupGlobalFetch(response) {
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve(response))
}

describe('src/actions/index.js', () => {
  context('fetchReadingList', () => {
    it('should dispatch fetchReadingListSuccess', () => {
      const results = {
        books: []
      }
      const readinglistResp = {
        ok: true,
        json() {
          return results
        }
      }
      setupGlobalFetch(readinglistResp)

      return fetchReadingList()(dispatch)
      .then(() => {
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/readinglist/books`);
        expect(dispatch).toHaveBeenCalledWith(fetchReadingListSuccess(results.books))
      })
    })
  })

  context('deleteBook', () => {
    it('should dispatch deleteBookSuccess', () => {
      const idNum = 12345;
      const methodType = {
        method: 'DELETE'
      };
      const book = {
        id: idNum
      };
      const deleteBookResp = {
        json() {
          return book
        }
      }
      setupGlobalFetch(deleteBookResp)

      return deleteBook(book)(dispatch)
      .then(() => {
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/readinglist/books/remove/${book.id}`, methodType);
        expect(dispatch).toHaveBeenCalledWith(deleteBookSuccess(book))
      })
    })
  })

  context('bookSearch', () => {
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
      const bookSearchResp = {
        ok: true,
        json() {
          return results
        }
      }
      setupGlobalFetch(bookSearchResp)

      return bookSearch(term, page)(dispatch)
      .then(() => {
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/search`, searchBody);
        expect(dispatch).toHaveBeenCalledWith(searchBookSuccess(results, term))
      })
    })
  })

  context('addBook', () => {
    it('should add book to ReadingList', () => {
      const results = 'anything';
      const googleBook = {
        title: 'title',
        authors: ['author'],
        thumbnail: 'thumbnail',
        industryIdentifiers: [{
          identifier: 1234567891
        }],
        googleId: 'googleId',
      };
      const book = transformGoogleBook(googleBook)
      const addBody = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
      };
      const addBookResp = {
        ok: true,
        json() {
          return results
        }
      }
      setupGlobalFetch(addBookResp)

      return addBook(googleBook)(dispatch)
      .then(() => {
        expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/readinglist/books/add`, addBody);
        expect(dispatch).toHaveBeenCalledWith(addBookSuccess(book))
      })
    })
  })
})
