import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    return rest.isLoginSuccess === true ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }}
  />
);

const mapStateToProps = (state) => {
    return {
        isLoginSuccess: state.loginReducer.isLoginSuccess,
        loginError: state.loginError
    };
}

export default connect(mapStateToProps, null, null, {
  pure: false
})(PrivateRoute);
