import 'animate.css';
import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Marketing from './Components/Marketing';
import Plant from './Assets/jaconda-plant.png';
import SocialMedia from './Components/SocialMedia';
import Certifications from './Components/Certifications';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <header className="App-header" id="home">
        <NavBar className="NavBar"/>
          <h1 className="App-title animate__animated animate__fadeInDown">GAMELA BRICE</h1>
          <img className="Plant" src={Plant}/>
      </header>
      <About/>
      <Marketing/>
      <SocialMedia/>
      <Certifications/>
      <Contact/>
    </div>
  );
}

export default App;
