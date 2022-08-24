import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Services from './components/Services';
// import katie from '../src/components/Services/katie.svg'
// import star from '../src/components/Services/star.svg'

function App() {
  const card = data.map(info => {
    return <Services 
              title = info={.title}
            />
  })
  return (
    <div className="App">
      <Navbar />
      <Intro />

      {/* <Services /> */}
    </div>
  );
}

export default App;
