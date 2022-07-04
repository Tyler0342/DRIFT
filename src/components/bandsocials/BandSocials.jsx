import React from 'react';
import { facebook, twitter, instagram, snapchat } from './imports';
import './bandsocials.css';

const BandSocials = () => (
  <div className="drift__bandsocials">
    <div>
      <img src={facebook} alt="facebook" />
    </div>
    <div>
      <img src={twitter} alt="twitter" />
    </div>
    <div>
      <img src={instagram} alt="instagram" />
    </div>
    <div>
      <img src={snapchat} alt="snapchat" />
    </div>
    {/* <div>
      <img src={youtube} alt="youtube" />
    </div> */}
    <h1>Join our newsletter for exclusive access</h1>
    <div className="drift__socials-btn">
      <div>
      <button type="button">Join</button>
      </div>
    </div>
  </div>
);

export default BandSocials;

