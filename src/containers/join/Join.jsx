import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './join.css';

const Join = () => (
  <div className="drift__join section__padding" id="join">
    <div className="drift__join-image">
      <img src={possibilityImage} alt="join" />
    </div>
    <div className="drift__join-content">
      <h4>Create an Account to Stay Up To Date With The Band</h4>
      <h1 className="gradient__text">The possibilities are <br /> endless</h1>
      <p>Raw impactful music</p>
      <h4>Create an Account to Stay Up To Date With The Band</h4>
    </div>
  </div>
);

export default Join;