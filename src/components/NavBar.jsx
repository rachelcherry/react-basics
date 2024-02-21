import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    return (
      <div>
        <nav>
          <span className="navSpan">Spark! BookPals</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>          
        </nav>
      </div>
    )
  }
  export default NavBar;

