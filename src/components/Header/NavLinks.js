import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

import { FiPlay, FiBookOpen, FiLogOut } from "react-icons/fi";
import { GoInfo, GoGear, GoDashboard } from "react-icons/go";

export function NavLinks() {
  return (
    <div className="nav_links">
      <Link to="/editor">
        <div className="nav_buttons">
          <FiPlay className="nav_links__icon" /> Start Coding
        </div>
      </Link>
      <Link to="/dashboard">
        <div className="nav_buttons">
          <GoDashboard className="nav_links__icon" /> Dashboard
        </div>
      </Link>
      <Link to="/syllabus">
        <div className="nav_buttons">
          {" "}
          <FiBookOpen className="nav_links__icon" /> Syllabus
        </div>
      </Link>
      <Link to="/about">
        <div className="nav_buttons">
          {" "}
          <GoInfo className="nav_links__icon" /> About
        </div>
      </Link>
      <a href="/logout">
        <div className="nav_buttons">
          {" "}
          <FiLogOut className="nav_links__icon" /> Logout
        </div>
      </a>
      <Link to="/admin">
        <div className="nav_buttons">
          {" "}
          <GoGear className="nav_links__icon" /> Admin
        </div>
      </Link>
    </div>
  );
}
