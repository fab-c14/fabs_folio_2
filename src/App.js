import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import About from './Components/About';
import Works from './Components/Works';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import { Slide, Fade } from 'react-awesome-reveal'; // Import Slide and Fade
import 'tachyons';
import ParticlesBg from 'particles-bg';

const App = () => {
  const [particleType, setParticleType] = useState('cobweb');
  const [isLightMode, setIsLightMode] = useState(true);

  const handleParticleChange = () => {
    setParticleType(particleType === 'cobweb' ? 'thick' : 'cobweb');
    setIsLightMode(!isLightMode);
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
            background: isLightMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
            color: isLightMode ? 'white' : 'black',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {isLightMode ? 'Light Mode On' : 'Light Mode Off'} {/* I have set the light mode on */}
        </button>
       
          <Fade cascade fraction={0.1} duration={600} distance={'1px'} style={{ color: isLightMode ? 'black' : 'white', fontSize: '20px' }}>
            <Header style={{ color: isLightMode ? 'black' : 'white' }} />
            <About style={{ color: isLightMode ? 'black' : 'white' }} />
            <Works style={{ color: isLightMode ? 'black' : 'red' }} />
            <Skills />
            <Footer />
          </Fade>
       
      </div>
    </div>
  );
};

export default App;
