import logo from '../../images/logo.png';
import React, { useState } from 'react';

function Navbar() {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <ul className="menu">
        <li><a href="#main">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#login">Login/SignUp</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;