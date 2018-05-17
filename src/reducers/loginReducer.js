import {SET_LOGIN_SUCCESS, SET_LOGIN_ERROR} from '../actions/actionTypes';

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    makeLoginCall(email, password, error => {
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  }
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  }
}

function makeLoginCall(email, password, callback) {
  setTimeout(() => {
    if (email === 'reader@tome.com' && password === 'reader') {
      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);
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




// import {SET_LOGIN_PENDING, SET_LOGIN_SUCCESS, SET_LOGIN_ERROR} from '../actions/actionTypes';

// export function login(email, password) {
//   return dispatch => {
//     dispatch(setLoginPending(true));
//     dispatch(setLoginSuccess(false));
//     dispatch(setLoginError(null));

//     makeLoginCall(email, password, error => {
//       dispatch(setLoginPending(false));
//       if (!error) {
//         dispatch(setLoginSuccess(true));
//       } else {
//         dispatch(setLoginError(error));
//       }
//     });
//   }
// }

// function setLoginPending(isLoginPending) {
//   return {
//     type: SET_LOGIN_PENDING,
//     isLoginPending
//   };
// }

// function setLoginSuccess(isLoginSuccess) {
//   return {
//     type: SET_LOGIN_SUCCESS,
//     isLoginSuccess
//   };
// }

// function setLoginError(loginError) {
//   return {
//     type: SET_LOGIN_ERROR,
//     loginError
//   }
// }

// function makeLoginCall(email, password, callback) {
//   setTimeout(() => {
//     if (email === 'reader@tome.com' && password === 'reader') {
//       return callback(null);
//     } else {
//       return callback(new Error('Invalid email and password'));
//     }
//   }, 1000);
// }


// export default function loginReducer(state = {
//   isLoginSuccess: false,
//   isLoginPending: false,
//   loginError: null
// }, action) {
//   switch (action.type) {
//     case SET_LOGIN_PENDING:
//       return Object.assign({}, state, {
//         isLoginPending: action.isLoginPending
//       });

//     case SET_LOGIN_SUCCESS:
//       return Object.assign({}, state, {
//         isLoginSuccess: action.isLoginSuccess
//       });

//     case SET_LOGIN_ERROR:
//       return Object.assign({}, state, {
//         loginError: action.loginError
//       });

//     default:
//       return state;
//   }
// }
