import logo from './logo.svg';
import './App.css';

import {Link} from 'react-router-dom';


function Nav() {
  
  const navStyle = {
      color: 'white'
  };

  return (
    <nav>
      <ul className="nav-links">
          <Link style={navStyle} to="/camera">
            <li>Camera Test</li>
          </Link>
          <Link style={navStyle} to="/home">
            <li>Home</li>
          </Link>
          <Link style={navStyle} to="/WebcamFace">
            <li>Webcam</li>
          </Link>
      </ul>  
    </nav>
  );
}

export default Nav;

