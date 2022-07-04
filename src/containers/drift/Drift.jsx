import React from 'react';
import Features from '../../components/features/Features';
import './drift.css';

const Drift = () => (
  <div className="drift__drift section__margin" id="drift">
    <div className="drift__drift-feature">
      <Features title="Drift" text="We Are DRIFT" />
    </div>
    <div className="drift__drift-heading">
      <h1 className="gradient__text">DRIFT</h1>
      <p>Meet the band</p>
    </div>
    <div className="drift__drift-container">
      <Features title="Christian" text="AKA Knife Pickin Christian. Christian is a founding member of DRIFT." />
      <Features title="Dylan" text="Dylan goes postal on the bass strings, also a founding member." />
      <Features title="Tyler" text="Tyler always plays out of time" />
    </div>
  </div>
);

export default Drift;
