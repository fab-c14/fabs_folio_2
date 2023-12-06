
import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import About from './Components/About';
import Works from './Components/Works';
import Footer from './Components/Footer';
import { Fade } from 'react-reveal';
import Contact from './Components/Contact';
import 'tachyons';
import ParticlesBg from 'particles-bg';
import './index.css';

const App = () => {
  return (
    <div>
        <ParticlesBg type="tadpole" bg={true} width={"100%"} height={"100vh"} />
      <div className="container">
        <Fade left cascade>
          <Header />
          <About />
          <Works />
          <Contact />
          <Footer />
        </Fade>
       
      </div>
    </div>
  );
};
export default App;