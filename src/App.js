import 'animate.css';
import './App.css';
import NavBar from './Components/NavBar';
import Marketing from './Components/Marketing';
import Plant from './Assets/jaconda-plant.png';
import SocialMedia from './Components/SocialMedia';

function App() {
  return (
    <div className="App">
      <header className="App-header" id="home">
        <NavBar className="NavBar"/>
          <h1 className="App-title animate__animated animate__fadeInDown">Gamela Brice</h1>
          <img className="Plant" src={Plant}/>
      </header>
      <Marketing/>
      <SocialMedia/>
    </div>
  );
}

export default App;
