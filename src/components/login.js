import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../reducers/loginReducer';
//import {reduxForm} from 'redux-form';
import TitleCard from './title-card';
import history from '../store/configureStore';
import './login.css';


class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    let {email, password} = this.state;
    let {isLoginSuccess, loginError} = this.props;
    return (
      <div><TitleCard />
          <form name="loginForm" onSubmit={this.onSubmit}>
            <div className="form-group-collection">
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="email" name="email" placeholder="amanda@gmail.com" onChange={e => this.setState({email: e.target.value})} value={email}/>
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" className="password" name="password" placeholder="i<3toreadbo0ks" onChange={e => this.setState({password: e.target.value})} value={password}/>
              </div>
            </div>
            <input type="submit" className="login-btn" value="Login" />
            <div className="message">
              {loginError && <div>{loginError.message}</div>}
            </div>
          </form>
      </div>
    )
  }

  onSubmit(e) {
    e.preventDefault();
    let {email, password} = this.state;
    console.log('em and pw on login:', email, password);
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
}

const mapStateToProps = (state) => {
  return {
    // isLoginPending: state.isLoginPending,
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

