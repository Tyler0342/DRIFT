import React from 'react';
import { Schecter, Ibanez, Pearl } from './imports';
import './gear.css';

const Gear = () => (
  <div className="drift__gear">
    <h3>DRIFT uses Schecter Guitars, Ibanez Basses, and Pearl Drums</h3>
      <div>
      <img src={Schecter} alt="Schecter Guitars" />
    </div>
        <div>
        <img src={Ibanez} alt="Ibanez Basses" />
      </div>
          <div>
          <img src={Pearl} alt="Pearl Drums" />
        </div>
      </div>
);

export default Gear;
