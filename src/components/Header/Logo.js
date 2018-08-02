import React from "react";
import Logoimg from "../../images/constructor-labs-badge.png";
export default function Logo() {
  return (
    <div>
      <a href="/">
        <img className="logoimg" src={Logoimg} />
      </a>
    </div>
  );
}
