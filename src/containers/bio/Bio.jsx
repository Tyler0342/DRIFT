import React from 'react';
import Features from '../../components/features/Features';
import './bio.css';

const bioData = [
  {
    title: 'Christian',
    text: 'AKA Knife Pickin Christian.',
  },
  {
    title: 'Dylan',
    text: 'Slappin and pickin dem chonky basslines.',
  },
  {
    title: 'Tyler',
    text: 'Likes to beat the shit out of the drumset.',
  },
  {
    title: 'We are DRIFT',
    text: 'Currently recording demos',
  },
];

const Bio = () => (
  <div className="drift__bios section__padding" id="bios">
    <div className="drift__bios-heading">
      <h1 className="gradient__text">About The Band</h1>
      <p>Create an account for exclusive access to behind the scenes footage of DRIFTs practice and recording sessions!</p>
    </div>
    <div className="drift__bios-container">
      {bioData.map((item, index) => (
        <Features title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Bio;
