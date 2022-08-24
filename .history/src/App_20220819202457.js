import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Services from './components/Services';
import katie from '../'

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
        region = 'U.S.A'
        title= 'Life lessons with Katie Zaferes'
        price='$136'
      />
    </div>
  );
}

export default App;
