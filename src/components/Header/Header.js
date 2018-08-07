import React, { Component } from "react";
import "./StyleHeader.css";
import Logo from "./Logo";
import { NavLinks } from "./NavLinks";
import NavBarProfile from "../../Containers/NavBarProfileContainer";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="background">
          <Logo />
          <NavLinks />
          <NavBarProfile />
        </div>
      </header>
    );
  }
}
