import React from 'react';
import people from '../../assets/people.png';
import './header.css';

const Header = () => (
  <div className="drift__header section__padding" id="home">
    <div className="drift__header-content">
      <h1 className="gradient__text">Let&apos;s make some music!</h1>
      <p>DRIFT creates music without boundries</p>

      <div className="drift__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Join</button>
      </div>

      <div className="drift__header-content__people">
        <img src={people} />
        <p>600 people followed DRIFT in last 24 hours</p>
      </div>
    </div>

    <div className="drift__header-image">
      <img src="Image Here" />
    </div>
  </div>
);

export default Header;
