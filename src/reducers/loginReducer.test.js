import {loginReducer} from './loginReducer';
import {setLoginSuccess, setLoginError} from '../actions/actionTypes';


describe('loginReducer', () => {
  const error = 'error message';

  it('Should set the user login status', () => {
      let state;
      state = loginReducer(state, setLoginSuccess(true));
      expect(state.isLoginSuccess).toEqual(true);
  });

  it('Should return error', () => {
      let state;
      state = loginReducer(state, setLoginError(error));
      expect(state.loginError).toEqual(error);
  });

});

