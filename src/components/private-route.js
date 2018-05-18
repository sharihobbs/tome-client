import React from 'react';
// importing router
import {
  Route,
  Redirect
} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth: auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
        (<Component {...props} />)
      // auth.isAuthenticated === true ? (
      //   <Component {...props} />
      // ) : (
      //   <Redirect to="/login" />
      // )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    auth: state.isLoginSuccess,
    loginError: state.loginError
  };
}

export default connect(mapStateToProps)(PrivateRoute);
