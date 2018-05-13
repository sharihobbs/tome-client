import * as types from './actionTypes';

function url() {
  return 'www.url.com';
}

export function getBook(json) {
  return {type: types.GET_BOOK, stuff: json.stuff};
}

export function searchBook() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'x-api-key': apiKey,
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(getBook(json)));
  };
}
