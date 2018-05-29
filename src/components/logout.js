import React from 'react';
import {Redirect} from 'react-router-dom';
import {logout, resetState} from '../actions/index';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export class Logout extends React.Component {

  componentDidMount() {
    this.props.resetState();
    this.props.logout();
  }

  render() {
    return (
        <Redirect push from='/logout' to='/login' />
    );
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    resetState: () => dispatch(resetState())
  }
}

export default connect(null, mapDispatchToProps)(Logout)

