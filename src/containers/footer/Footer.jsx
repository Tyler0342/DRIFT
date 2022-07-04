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
      <div className="drift__footer-links_logo">
        <img src={driftLogo} alt="drift_logo" />
        <p>Chonk Records, <br /> All Rights Reserved</p>
      </div>
      <div className="drift__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="drift__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="drift__footer-links_div">
        <h4>Get in touch</h4>
        <p>Drift</p>
        <p>phone number</p>
        <p>DRIFTband@gmail.com</p>
      </div>
    </div>

    <div className="drift__footer-copyright">
      <p>@2022 DRIFT. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
