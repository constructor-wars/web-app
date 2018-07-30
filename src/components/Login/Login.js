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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <UserLogin
          placeholder="enter your user name"
          value={this.state.username}
          onChange={this.handleChange}
          name="username"
          label="User Name:"
        />
        <UserLogin
          value={this.state.password}
          placeholder="enter your password"
          onChange={this.handleChange}
          name="password"
          label="Password:"
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
