import {
  SET_LOGIN_SUCCESS,
  SET_LOGIN_ERROR
} from '../actions/actionTypes';

const initialState = {
  isLoginSuccess: false,
  loginError: null,
  isLogOut: true
}

export const loginReducer =(state=initialState, action) => {
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

export default loginReducer;
