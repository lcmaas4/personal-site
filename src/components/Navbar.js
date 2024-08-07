import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects" className="navbar-link">Projects</Link>
        </li>
        <li className="navbar-item">
          <Link to="/resume" className="navbar-link">Resume</Link>
        </li>
        <li className="navbar-item">
          <a href="https://www.linkedin.com/in/lcmaas4" className="navbar-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="navbar-item">
          <a href="https://github.com/lcmaas4" className="navbar-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
