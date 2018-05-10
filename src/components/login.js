import React from 'react';
import {reduxForm} from 'redux-form';

import './login.css';

class Login extends React.Component {
  onSubmit(values) {
        console.log(values);
    }
    render() {
        return (
          <div className="wrapper">
            <form className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <div className="field-div">
                    <label htmlFor="email" className="login-field">Email</label>
                    <input name="email" id="email" className="input" type="email" placeholder="amanda@gmail.com" />
                </div>
                <div className="field-div">
                    <label htmlFor="password" className="login-field">Password</label>
                    <input name="password" id="password" className="input" type="password" placeholder="i<3toreadbo0ks" />
                    <button type="submit" className="login-btn">Login</button>
                </div>
            </form>
          </div>
        );
    }
}

export default reduxForm({
    form: 'login'
})(Login);
