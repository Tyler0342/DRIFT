import React from 'react';
import Bio from '../../components/bio/Bio';
import './drift.css';

const Drift = () => (
  <div className="drift__drift section__margin" id="drift">
    <div className="drift__drift-bio">
      <Bio title="Drift" text="This is DRIFT" />
    </div>
    <div className="drift__drift-heading">
      <h1 className="gradient__text">DRIFT</h1>
      <p>Meet the band</p>
    </div>
    <div className="drift__drift-container">
      <Bio title="Christian" text="Christian is a founding member of DRIFT." />
      <Bio title="Dylan" text="Dylan goes postal on the bass strings, also a founding member." />
      <Bio title="Tyler" text="Tyler always plays out of time" />
    </div>
  </div>
);

export default Drift;