import React from 'react';
import Features from '../../components/features/Features';
import './bio.css';

const bioData = [
  {
    title: 'Christian',
    text: 'Guitar/Vocals',
  },
  {
    title: 'Dylan',
    text: 'Bass/Vocals',
  },
  {
    title: 'Tyler',
    text: 'Drums/Vocals',
  },
  {
    title: 'We are DRIFT',
    text: 'Currently recording demos',
  },
];

const Bio = () => (
  <div className="drift__bios section__padding" id="bios">
    <div className="drift__bios-heading">
      <h1 className="gradient__text">Who is DRIFT?</h1>
    </div>
    <div className="drift__bios-container">
      {bioData.map((item, index) => (
        <Features title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Bio;
