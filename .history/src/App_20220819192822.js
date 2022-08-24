import './App.css';
import Intro from './components/Intro';
import Jokes from './components/Jokes';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services fn='Abdullah' ln='Oladeji'/>
      <Jokes 
        second=''
        first
      />
    </div>
  );
}

export default App;
