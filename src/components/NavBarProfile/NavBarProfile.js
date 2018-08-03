import React from "react";
import "./navbarprofile.css";
import { Link } from "react-router-dom";

export default function NavBarProfile({
  id,
  username,
  displayName,
  profileUrl,
  profilepic
}) {
  return (
    <Link to="/profile">
      <div className="navbarprofile_container">
        <img
          className="navbarprofile_picture"
          src={profilepic}
          alt={username}
        />
      </div>
    </Link>
  );
}
