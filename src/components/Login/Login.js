import React from 'react';
import './StyleLogin.css';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import { EventEmitter } from 'events';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div>
        UserName:{' '}
        <UserLogin
          placeholder="enter your user name"
          value={this.state.username}
          onChange={this.onChange}
        />
        Password:{' '}
        <UserLogin
          value={this.state.password}
          placeholder="enter your password"
          onChange={this.onChange}
        />
        <button>Log in</button>
        <hr />
        <p>to Sign up, Register here</p>
        {/* User Name:<UserRegister placeholder="create a new account" />
        Email: <UserRegister placeholder="your email address" /> */}
        <button>Register </button>
      </div>
    );
  }
}
