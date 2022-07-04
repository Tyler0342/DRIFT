import React from 'react';
import driftLogo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="drift__footer section__padding">
    <div className="drift__footer-heading">
      <h1 className="gradient__text">Do you want to enjoy energetic, creative and boundry pushing live music?</h1>
    </div>

    <div className="drift__footer-btn">
      <p>Request A Booking</p>
    </div>

    <div className="drift__footer-links">
      <div className="drift__footer-links_div">
        <h4>Links</h4>
        <p>Schecter.com<br />Ibanez.com<br /> Pearl.com</p>
        <h4>Social Media</h4>
        <p>Twitter<br />Snap Chat<br />Instagram<br /></p>
      </div>
      <div className="drift__footer-links_div">
        <h4>Get in touch</h4>
        <p>Phone</p>
        <p>720-420-6669</p>
        <p>Email</p>
        <p>christian@drift.band <br /> dylan@drift.band <br /> tyler@drift.band <br /></p>
      </div>
      <div className="drift__footer-links_logo">
        <img src={driftLogo} alt="drift_logo" />
        <p>Chonk Records, <br /> All Rights Reserved</p>
      </div>
    </div>

    <div className="drift__footer-copyright">
      <p>@2022 DRIFTband. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
