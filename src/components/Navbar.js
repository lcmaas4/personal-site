import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faBriefcase,
  faCode,
  faFileAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  const navItems = [
    { href: "#home", icon: faHome, text: "Home" },
    { href: "#experience", icon: faBriefcase, text: "Experience" },
    { href: "#projects", icon: faCode, text: "Projects" },
    { href: "#resume", icon: faFileAlt, text: "Resume" },
    { href: "#about", icon: faUser, text: "About" },
    {
      href: "https://www.linkedin.com/in/lcmaas4",
      icon: faLinkedin,
      text: "LinkedIn",
      external: true,
    },
    {
      href: "https://github.com/lcmaas4",
      icon: faGithub,
      text: "GitHub",
      external: true,
    },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <div className="hero-image navbar-link">
            <img
              src="../assets/images/balc.PNG"
              alt="Hero"
              className="small-image"
            />
          </div>
        </li>
        {navItems.map((item, index) => (
          <li key={index} className="navbar-item">
            <a
              href={item.href}
              className="navbar-link"
              {...(item.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span className="navbar-text">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
