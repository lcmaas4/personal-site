import React from 'react';
import './Home.css'; // Custom CSS for the Home component
import About from './About.js'; // Adjust the import path as necessary
import Projects from './Projects.js'; // Adjust the import path as necessary
import Resume from './Resume.js'; // Adjust the import path as necessary
import Experience from './Experience.js'; // Adjust the import path as necessary

function Home() {
  return (
    <div className="home-container" id="home">
      <div className="hero-section">
        <div className="hero-image">
          <img src="../assets/images/Me@BrinaGrad.PNG" alt="Hero" className="small-image" />
        </div>
        <div className="hero-content">
          <h1>Hi, I'm Louie Maas</h1>
          <p>I'm a people-oriented software developer with experience across the tech stack, working on various projects and in a variety of roles.</p>
        </div>
      </div>

      {/* Full sections imported from other components */}

      <div className="full-section" id="experience">
        <Experience />
      </div>

      <div className="full-section" id="projects">
        <Projects />
      </div>

      <div className="full-section" id="resume">
        <Resume />
      </div>

      <div className="full-section" id="about">
        <About />
      </div>
    </div>
  );
}

export default Home;
