import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import Recent from './Recent';
import About from './About';
function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Recent />
      <Footer />

    </div>
  )
}

export default App;
