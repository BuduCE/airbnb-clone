import './App.css';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Services from './components/Services';
import data from './data'
// import katie from '../src/components/Services/katie.svg'
// import star from '../src/components/Services/star.svg'

function App() {
  const card = data.map(info => {
    return <Services 
              key = {info.id}
              {...info}
            />
  })
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <div className='card-list'>
        {card}
      </div>
      {/* <Services /> */}
    </div>
  );
}

export default App;
