import {searchReducer} from './searchReducer';
import {searchBookSuccess, resetResults} from '../actions/actionTypes';

describe('searchReducer', () => {
  const book = {
  title: 'title',
  author: 'author',
  thumbnail: 'thumbnail',
  isbn: 'isbn',
  note: 'note',
  googleId: 'googleId'
  };

  const results = [{book}];

  const term = 'query';

  it('Should return search results from API call', () => {
      let state;
      state = searchReducer(state, searchBookSuccess(results, term));
      expect(state.resultsBooks).toEqual(results, term);
  });

  it('Should reset State before next search', () => {
    let state;
    state = searchReducer(state, resetResults());
    expect(state).toEqual({resultsBooks: []});
  });

});
