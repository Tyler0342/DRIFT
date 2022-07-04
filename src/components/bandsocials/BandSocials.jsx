import React from 'react';
import { facebook, twitter, instagram, snapchat, youtube } from './imports';
import './bandsocials.css';

const BandSocials = () => (
  <div className="drift__bandsocials">
    <div>
      <img src={facebook} />
    </div>
    <div>
      <img src={twitter} />
    </div>
    <div>
      <img src={instagram} />
    </div>
    <div>
      <img src={snapchat} />
    </div>
    <div>
      <img src={youtube} />
    </div>
    <div className="drift__socials-btn">
      <h1>Join our newsletter for exclusive access</h1>
      <button type="button">Join</button>
    </div>
  </div>
);

export default BandSocials;

