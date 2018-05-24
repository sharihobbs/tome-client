import React from 'react';
import {Redirect} from 'react-router-dom';
import {logout} from '../actions/index';
import {connect} from 'react-redux';

class Logout extends React.Component {
  render() {
    this.props.logout()
    return (<Redirect push from='/logout' to='/login' />)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(Logout)

