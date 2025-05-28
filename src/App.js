import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Works from './Components/Works';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import { Slide, Fade } from 'react-awesome-reveal';
import 'tachyons';
import ParticlesBg from 'particles-bg';

const App = () => {
  // const [particleType, setParticleType] = useState('cobweb');
  const [isLightMode, setIsLightMode] = useState(true);

  // const handleParticleChange = () => {
  //   setParticleType(particleType === 'cobweb' ? 'thick' : 'cobweb');
  //   setIsLightMode(!isLightMode);
  // };

  return (
    <div>
     
      <HeroSection />
      <About />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
};

export default App;