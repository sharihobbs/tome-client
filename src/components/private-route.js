import React from 'react';
// importing router
import {
  Route,
  Redirect
} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    console.log(`PrivateRoute rest.isLoginSuccess: ${JSON.stringify(rest.isLoginSuccess)}`)
    console.log(`PrivateRoute props: ${JSON.stringify(props)}`)
    return rest.isLoginSuccess === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }}
  />
);

const mapStateToProps = (state) => {
    console.log(`isLoginSuccess: ${JSON.stringify(state.loginReducer.isLoginSuccess)}`)
    return {
        isLoginSuccess: state.loginReducer.isLoginSuccess,
        loginError: state.loginError
    };
}

export default connect(mapStateToProps, null, null, {
  pure: false
})(PrivateRoute);

