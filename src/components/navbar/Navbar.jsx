import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="drift__navbar">
      <div className="drift__navbar-links">
        <div className="drift__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="drift__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#drift">About the band</a></p>
          <p><a href="#concertdates">Concert Dates</a></p>
          <p><a href="#getintouch">Get in touch</a></p>
          <p><a href="#lyrics">Lyrics</a></p>
        </div>
      </div>
      <div className="drift__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="drift__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="drift__navbar-menu_container scale-up-center">
          <div className="drift__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#drift">About the band</a></p>
            <p><a href="#concertdates">Concert Dates</a></p>
            <p><a href="#getintouch">Get in touch</a></p>
            <p><a href="#lyrics">Lyrics</a></p>
          </div>
          <div className="drift__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
