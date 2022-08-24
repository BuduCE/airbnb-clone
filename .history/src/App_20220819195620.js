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
        third
      />
      <Jokes 
        second='How did the hacker escape the police'
        first='He just ransomware'
      />
      <Jokes 
        second="Why didn't pirate travel on mountain roads"
        first='Scurvy'
      />
    </div>
  );
}

export default App;
