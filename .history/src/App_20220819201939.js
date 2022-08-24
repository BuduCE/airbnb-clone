import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services 
        img='katie.svg'
        star='star.svg'
        rating= {5.0}
        num = {(6.0)}
        
      />
    </div>
  );
}

export default App;
