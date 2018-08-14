import React from 'react';
import Logoimg from '../../images/logo.png';
export default function Logo() {
  return (
    <div>
      <a href="/">
        <img className="logoimg" src={Logoimg} />
      </a>
    </div>
  );
}
