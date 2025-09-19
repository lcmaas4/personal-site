import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faBriefcase,
  faCode,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsHidden(false);
      } else if (currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navItems = [
    { href: "#experience", icon: faBriefcase, text: "Experience" },
    { href: "#projects", icon: faCode, text: "Projects" },
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
    <nav className={`navbar ${isHidden ? "hidden" : ""}`}>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#home" className="navbar-link">
            <div className="hero-image navbar-link">
              <img
                src="../assets/images/balc.PNG"
                alt="Hero"
                className="small-image"
              />
            </div>
          </a>
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
