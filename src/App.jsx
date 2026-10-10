import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Section1 from './components/Main/Section1';
import Footer from './components/Footer/Footer';
import ParticlesBackground from './components/Particlesthem';
import Particlesthem from './components/Particlesthem';
import Section2 from './components/Main/Section2';
import Section3 from './components/Main/Section3';
import Section4 from './components/Main/Section4';
import Section5 from './components/Main/Section5';
import Section6 from './components/Main/Section6';

function App() {
  return (
    <>
      <Particlesthem />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </>
  );
}

export default App;
