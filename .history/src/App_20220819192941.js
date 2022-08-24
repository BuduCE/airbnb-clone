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
        second='I got my daughter  fridge for her birthday'
        first="I can't wait to see her face lighup when she opens it."
      />
      <Jokes 
        second=''
        first=''
      />
      <Jokes 
        second=''
        first=''
      />
    </div>
  );
}

export default App;
