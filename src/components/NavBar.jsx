import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    return (
      <div>
        <nav>
          <span className="navSpan">Spark! BookPals</span>
          <div className="links">
            <ul>
            <li><Link to="/">Home</Link></li> {/* links to the home page in the nav bar */}
          <li><Link to="/about"> About</Link> </li>{/* links to the about page in the nav bar */}
            </ul>
          </div>         
        </nav>
      </div>
    )
  }
  export default NavBar;

