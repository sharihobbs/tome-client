import React, {Component} from 'react';

import {Redirect} from 'react-router-dom';

// import connect for mapping state to props
import {connect} from 'react-redux';

// import login function from the reducer
import {login} from '../reducers/loginReducer';

// import TitleCard to show above login form
import TitleCard from './title-card';

// import css for login form
import './login.css';


class LoginForm extends Component {
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
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div><TitleCard />
        <form name="loginForm" onSubmit={this.onSubmit}>
          <div className="form-group-collection">
            <div className="form-group">
              <label className="login-label">Email</label>
              <input type="email" className="email" name="email" placeholder="amanda@gmail.com" onChange={e => this.setState({email: e.target.value})} value={email}/>
            </div>

            <div className="form-group">
              <label className="login-label">Password</label>
              <input type="password" className="password" name="password" placeholder="i<3toreadbo0ks" onChange={e => this.setState({password: e.target.value})} value={password}/>
            </div>
          </div>
          <input type="submit" className="login-btn" value="Login"  />
        </form>
      </div>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    let {email, password} = this.state;
    this.props.login(email, password);
    console.log('em and pw on login:', email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

