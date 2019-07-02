import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark mb-3 py-0">
      <div className="container">
        <a href="/" className="navBar navbar-brand">REACT APP 1 </a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link navBarItem">
              <i className="fa fa-home navIcon" />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/player/add" className="nav-link navBarItem">
              <i className="fa fa-plus navIcon" />
              Add Player
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link navBarItem">
              <i className="fa fa-question navIcon" />
              About
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  )
}
export default Header;