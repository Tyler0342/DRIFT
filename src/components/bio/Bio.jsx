import React from 'react';
import './feature.css';

const Bios = ({ title, text }) => (
  <div className="drift__features-container__feature">
    <div className="drift__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="drift__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Bios;