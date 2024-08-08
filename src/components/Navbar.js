import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#home" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#experience" className="navbar-link">Experience</a>
        </li>
        <li className="navbar-item">
          <a href="#projects" className="navbar-link">Projects</a>
        </li>
        <li className="navbar-item">
          <a href="#resume" className="navbar-link">Resume</a>
        </li>
        <li className="navbar-item">
          <a href="#about" className="navbar-link">About</a>
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