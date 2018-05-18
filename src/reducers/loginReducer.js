import {SET_LOGIN_SUCCESS, setLoginSuccess, SET_LOGIN_ERROR, setLoginError} from '../actions/actionTypes';

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    makeLoginCall(email, password, error => {
      if (error) {
        return dispatch(setLoginError(error));
      }
      return dispatch(setLoginSuccess(true));
    });
  }
}

function makeLoginCall(email, password, callback) {
  setTimeout(() => {
    if (email === 'reader@tome.com' && password === 'reader') {
      return callback(null);
    } else {
      alert('Invalid email and password');
    }
  }, 100);
}

export default function loginReducer(state = {
  isLoginSuccess: false,
  loginError: null
}, action) {
  switch (action.type) {

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}

