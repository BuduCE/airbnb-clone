import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Services from './components/Services';
import katie from '../src/components/Services/katie.svg'
import star from '../src/components/Services/star.svg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services 
        img = {katie.svg'}
        star={star}
        rating= "5.0"
        num = {6}
        region = 'U.S.A'
        title= 'Life lessons with Katie Zaferes'
        price='136'
      />
    </div>
  );
}

export default App;
