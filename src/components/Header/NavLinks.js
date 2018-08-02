import React from "react";
import { Link } from "react-router-dom";

export function NavLinks() {
  return (
    <div className="profile">
      <a href="/">Home</a>
      <Link to="/editor">Start Coding</Link>
      <Link to="/curriculum">Curriculum</Link>
      <Link to="/profile">Profile</Link>
      <a href="/logout">Logout</a>
    </div>
  );
}
