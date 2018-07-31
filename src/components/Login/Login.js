import React from 'react';
import './StyleLogin.css';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import { EventEmitter } from 'events';
import Logo from '../../images/constructor-labs-badge.png';

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
    localStorage.setItem('LoggedIn', JSON.stringify(this.state.username));
  }

  render() {
    console.log(this.state);
    return (
      <div className="login_main">
        <div className="login_container">
          <img className="logo" src={Logo} />
          <form className="form_container" onSubmit={this.handleSubmit}>
            <UserLogin
              placeholder="enter your user name"
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
              label="✉️"
            />
            <UserLogin
              value={this.state.password}
              placeholder="enter your password"
              onChange={this.handleChange}
              name="password"
              label="🔐"
            />

            <button className="login_button">Log in</button>
            <a href="#"> Forgot Password?</a>
            <hr className="hr_line" />
            <button className="signup_button">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}
