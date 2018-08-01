import React from 'react';
import Logoimg from '../../images/constructor-labs-badge.png';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div>
      <Link to="/login">
        <img className="logoimg" src={Logoimg} />
      </Link>
    </div>
  );
}
