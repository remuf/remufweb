import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import HeaderImage from './Components/HeaderImage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HeaderImage /> */}
      <About />
    </div>
  );
}

export default App;
