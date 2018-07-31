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
      password: '',
      isLoggedin: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      isLoggedin: true
    });
    localStorage.setItem('LoggedIn', this.state.username);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <form className="form_container" onSubmit={this.handleSubmit}>
          <UserLogin
            placeholder="enter your user name"
            value={this.state.username}
            onChange={this.handleChange}
            name="username"
            label="User Name: "
          />
          <UserLogin
            value={this.state.password}
            placeholder="enter your password"
            onChange={this.handleChange}
            name="password"
            label="Password: "
          />

          <button>Log in</button>
        </form>
        <hr />
        <p>to Sign up, Register here</p>

        <button>Register </button>
      </div>
    );
  }
}
