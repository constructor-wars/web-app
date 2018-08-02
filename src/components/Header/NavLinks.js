import React from "react";
import { Link } from "react-router-dom";
import "./Navlinks.css";

export function NavLinks() {
  return (
    <div className="nav_links">
      <a href="/">
        <button className="nav_buttons">Home</button>
      </a>
      <Link to="/editor">
        <button className="nav_buttons">Start Coding</button>
      </Link>
      <Link to="/curriculum">
        <button className="nav_buttons">Curriculum</button>
      </Link>
      <Link to="/profile">
        <button className="nav_buttons">Profile</button>
      </Link>
      <a href="/logout">
        <button className="nav_buttons">Logout</button>
      </a>
    </div>
  );
}
