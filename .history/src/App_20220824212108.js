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
              title = {info.title}
              img = {info.coverImg}
              price = {info.price}
              rating = {info.stats.rating}
              num = {info.stats.reviewCount}
            />
  })
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <div clasName
      {card}
      {/* <Services /> */}
    </div>
  );
}

export default App;
