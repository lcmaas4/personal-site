import React from "react";
import "./Home.css"; // Custom CSS for the Home component
import About from "./About.js"; // Adjust the import path as necessary
import Projects from "./Projects.js"; // Adjust the import path as necessary
import Resume from "./Resume.js"; // Adjust the import path as necessary
import Experience from "./Experience.js"; // Adjust the import path as necessary
import Background from "../components/Background";

function Home() {
  return (
    <div className="home-container" id="home">
      <Background />
      <div className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm Louie Maas!</h1>
          <p>
            I'm a people-oriented software developer with experience across the
            tech stack through a variety of roles and projects. I specialize in
            full-stack and front-end development, with a focus on building
            scalable and efficient systems with an eye for design. I'm currently
            working as a software engineering co-op at Proof.
          </p>
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
