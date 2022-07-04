import React from 'react';

import { Footer, Join, Bio, Header } from './containers';
import { Gear, BandSocials, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Drift /> */}
    <Bio />
    <BandSocials />
    <Gear />
    {/* <Blog /> */}
    <Join />
    <Footer />
  </div>
);

export default App;

