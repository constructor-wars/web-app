import React, { Component } from "react";
import "./StyleHeader.css";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import { NavLinks } from "./NavLinks";
import NavBarProfile from "../../Containers/NavBarProfileContainer";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="background">
          <Logo />
          <Searchbar />
          <NavLinks />
          <NavBarProfile />
        </div>
      </header>
    );
  }
}
