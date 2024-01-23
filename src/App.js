import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import About from './Components/About';
import Works from './Components/Works';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import { Fade } from 'react-awesome-reveal';
import 'tachyons';
import ParticlesBg from 'particles-bg';


const App = () => {
  const [particleType, setParticleType] = useState('cobweb');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleParticleChange = () => {
    setParticleType(particleType === 'cobweb' ? 'thick' : 'cobweb');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      >
        <ParticlesBg bg={true} type={particleType} zIndex={'-1'} num={window.innerWidth < 700 ? 60 : 120} />
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <button
          onClick={handleParticleChange}
          style={{
            position: 'fixed',
            top: 10,
            left: 10,
            zIndex: 1000,
            background: isDarkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
            color: isDarkMode ? 'white' : 'black',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {isDarkMode ? 'Light Mode On' : 'Light Mode Off'}
        </button>
        <Fade cascade fraction={0.1} duration={600} distance={'50px'} style={{ color: isDarkMode ? 'black' : 'white', fontSize: '20px' }}>
          <Header style={{ color: isDarkMode ? 'black' : 'white' }} />
          <About style={{ color: isDarkMode ? 'black' : 'white' }} />
          <Works style={{ color: isDarkMode ? 'black' : 'red' }} />
          <Skills />
          <Footer />
        </Fade>
      </div>
    </div>
  );
};

export default App;
