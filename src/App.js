import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Work from './Components/Work';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Work />
    </div>
  );
}

export default App;
