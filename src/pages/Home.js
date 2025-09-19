import React from "react";
import "./Home.css"; // Custom CSS for the Home component
import About from "./About.js"; // Adjust the import path as necessary
import Projects from "./Projects.js"; // Adjust the import path as necessary
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
            full-stack and frontend development, with expertise in building
            scalable and efficient systems with an eye for design. I've just
            finished a successful 8+ months working as a Software Engineering
            Co-op at Proof.
          </p>
          <a
            href="/assets/Maas_Luis_Dec2025.pdf"
            download="Maas_Luis_Dec2025.pdf"
            className="download-resume-btn"
            style={{
              marginTop: "1.5em",
              padding: "0.7em 1.5em",
              fontSize: "1.1em",
              borderRadius: "6px",
              background: "none",
              color: "white",
              border: "2px solid #8e8e90",
              textDecoration: "none",
              fontWeight: 600,
              display: "inline-block",
              transition: "background 0.2s, color 0.2s",
            }}
          >
            Download My Resume
          </a>
        </div>
      </div>

      {/* Full sections imported from other components */}

      <div className="full-section" id="experience">
        <Experience />
      </div>

      <div className="full-section" id="projects">
        <Projects />
      </div>

      <div className="full-section" id="about">
        <About />
      </div>
    </div>
  );
}

export default Home;
