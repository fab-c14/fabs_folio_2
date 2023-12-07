
import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import About from './Components/About';
import Works from './Components/Works';
import Footer from './Components/Footer';
import { Fade } from 'react-reveal';
import Skills from './Components/Skills';
import 'tachyons';
// import ParticlesBg from 'particles-bg';
import './index.css';

const App = () => {
  return (
    <div>
      <div className="container">
     
          <Header />
         
        
       
      </div>
    </div>
  );
};
export default App;