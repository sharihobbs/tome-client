import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../reducers/loginReducer';
import TitleCard from './title-card';
import './login.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    const {email, password} = this.state;
    const loginForm = (
      <div><TitleCard />
        <form name="loginForm" onSubmit={this.onSubmit}>
          <div className="form-group-collection">
            <div className="form-group">
              <label className="login-label">Email:</label>
              <input type="email" className="email" name="email" placeholder="amanda@gmail.com" onChange={e => this.setState({email: e.target.value})} value={email}/>
            </div>

            <div className="form-group">
              <label className="login-label">Password:</label>
              <input type="password" className="password" name="password" placeholder="i<3toreadbo0ks" onChange={e => this.setState({password: e.target.value})} value={password}/>
            </div>
          </div>
          <input type="submit" className="login-btn" value="Login"  />
        </form>
        <div>
        <p>Demo Account | Email: reader@tome.com | Password: reader</p>
        </div>
      </div>
    )

    if (this.props.isLoginSuccess === true) {
      return (<Redirect push from='/login' to='/readinglist' />)
    }
    return loginForm
  }

  onSubmit(e) {
    e.preventDefault();
    let {email, password} = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginSuccess: state.loginReducer.isLoginSuccess,
    loginError: state.loginReducer.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
