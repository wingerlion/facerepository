import logo from './logo.svg';
import './App.css';
import Camera from './Camera'
import Home from './Home'
import Nav from './Nav'
import WebcamFace from './WebcamFace'
import WebcamDNI from './WebcamDNI'
import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
            <Nav/>
            <Routes>
              <Route path="/Camera" element={<Camera />}/>
              <Route path="/Home" element={<Home />}/>
              <Route path="/WebcamFace" element={<WebcamFace />}/>
              <Route path="/WebcamDNI" element={<WebcamDNI />}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
