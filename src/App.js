
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import About from './Components/About';
import Works from './Components/Works';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import 'tachyons';
import ParticlesBg from 'particles-bg';
import './index.css';

const App = () => {
  return (
    <div>
       <div style={{
          width:"100%",
          height:"100%",
          position:"fixed",
        
          backgroundSize:"cover",
          zIndex:-1
        }}>
          <ParticlesBg bg={true} type="thick" zIndex={"-1"} num={window.innerWidth<700?20:90}/>
        </div>

      <div className="container">
     
         <Header />
         <About />
         <Works/>
         <Footer />
       
      </div>
    </div>
  );
};
export default App;