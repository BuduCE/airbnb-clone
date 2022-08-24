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
        rating= 5
      />
    </div>
  );
}

export default App;
