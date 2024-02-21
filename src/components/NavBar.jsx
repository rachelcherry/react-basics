import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    return (
      <div>
        <nav>
          <span className="navSpan">Spark! BookPals</span>
          <div className="links">
            <ul>
            <li><Link to="/">Home</Link></li>
          <li><Link to="/about"> About</Link> </li>
            </ul>
          </div>         
        </nav>
      </div>
    )
  }
  export default NavBar;

