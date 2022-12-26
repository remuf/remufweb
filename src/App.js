import './App.css';
import Header from './Components/Header_1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import Home from './Components/Home';
import Blog from './Components/Blog';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/news" element={<Blog/>} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
