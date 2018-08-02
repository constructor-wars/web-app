import React, { Component } from "react";
import "./StyleHeader.css";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import { NavLinks } from "./NavLinks";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="background">
          <Logo />
          <Searchbar />
          <NavLinks />
        </div>
      </header>
    );
  }
}
