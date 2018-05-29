import React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login, isLoggedIn} from '../actions/index';
import {setLoginError} from '../actions/actionTypes'
import TitleCard from './title-card';
import './login.css';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    const fromPath = props.history &&
                     props.history.location &&
                     props.history.location.state &&
                     props.history.location.state.from &&
                     props.history.location.state.from.pathname
    this.state = {
      email: '',
      password: '',
      fromPath: fromPath || '/readinglist'
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.props.isLoggedIn()
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.login(this.state.email, this.state.password)
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    const {email, password} = this.state;
    const loginForm = (
      <div><TitleCard />
        <form id="loginForm" name="loginForm" onSubmit={this.onSubmit}>
          <div className="form-group-collection">
            <div className="form-group">
              <label className="login-label">Email:</label>
              <input type="email" className="email" name="email" autoComplete="current-email" placeholder="amanda@gmail.com" onChange={e => this.setState({email: e.target.value})} value={email} required/>
            </div>

            <div className="form-group">
              <label className="login-label">Password:</label>
              <input type="password" className="password" name="password" autoComplete="current-password" placeholder="i<3toreadbo0ks" onChange={e => this.setState({password: e.target.value})} value={password} required/>
            </div>
          </div>
          <input type="submit" className="login-btn" value="Login"  />
        </form>
        <div>
        <p className="demo">Demo Account</p>
        <p className="demo">Email: reader@tome.com | Password: reader</p>
        </div>
      </div>
    )

    if (this.props.isLoginSuccess === true) {
      return (<Redirect push from='/login' to={this.state.fromPath} />)
    }

    if (this.props.loginError) {
      alert(this.props.loginError)
      this.props.setLoginError(null)
    }
    return loginForm
  }
}

LoginForm.propTypes = {
  setLoginError: PropTypes.func,
  login: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.func,
  loginError: PropTypes.func,
  isLoginSuccess: PropTypes.bool,
  history: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    isLoginSuccess: state.loginReducer.isLoginSuccess,
    loginError: state.loginReducer.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    isLoggedIn: () => dispatch(isLoggedIn()),
    setLoginError: (error) => dispatch(setLoginError(error))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
