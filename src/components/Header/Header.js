import React, { Component } from 'react';
import './StyleHeader.css';
import Logo from './Logo';
import Searchbar from './Searchbar';
import Score from './Score';
import Profile from './Profile';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="background">
          <Logo className="logo" />
          <Searchbar className="searchbar" />
          <Score />
          <Profile />
        </div>
      </header>
    );
  }
}
