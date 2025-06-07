import React, { useEffect } from "react";
import "./Experience.css"; // Custom CSS for the Experience component
import AOS from "aos";
import "aos/dist/aos.css";

const lumenImage = "assets/images/lumen.png";
const perugiaImage = "assets/images/perugia.jpg";
const envisionImage = "assets/images/envisionexotics.png";
const emrDirectImage = "assets/images/emrdirect.png";
const proofImage = "assets/images/proof.png";

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <div className="timeline">
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-content">
            <h2>Software Engineering Co-op, Proof</h2>
            <h4>January 2025 - August 2025</h4>
            <ul></ul>
          </div>
          <div className="timeline-image">
            <img src={proofImage} alt="Proof logo" />
          </div>
        </div>
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-content">
            <h2>Software Developer Intern, Lumen Technologies</h2>
            <h4>May 2024 - August 2024</h4>
            <ul>
              <li>
                Collaborated in an Agile framework, participating in daily
                stand-ups to share work and resolve blockers.
              </li>
              <li>
                Managed and manipulated a database of FitNesse test logs using
                robust SQL queries.
              </li>
              <li>
                Migrated nightly Yang/XML FitNesse tests to new lab devices,
                ensuring code correctness and efficiency.
              </li>
              <li>
                Leveraged my strong background in algorithms and data structures
                to optimize memory usage and runtime of Groovy scripts,
                enhancing the performance of parsing service requests from
                network customers.
              </li>
            </ul>
          </div>
          <div className="timeline-image">
            <img src={lumenImage} alt="Lumen Technologies logo" />
          </div>
        </div>
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-content">
            <h2>
              AI Software Development/Research Co-op, University of Perugia
              (Italy)
            </h2>
            <h4>September 2023 - December 2023</h4>
            <ul>
              <li>
                Developed an{" "}
                <a
                  target="_tab"
                  rel="noopener noreferrer"
                  href="https://github.com/iandreafc/distinctiveness-R"
                >
                  {" "}
                  R package
                </a>{" "}
                for computing metrics of Distinctiveness Centrality, a metric to
                interpret graphical data, used in the Semantic Brand Score (SBS)
                Business Intelligence App which conducts semantic analysis of
                text.
              </li>
              <li>
                <a
                  target="_tab"
                  rel="noopener noreferrer"
                  href="https://cran.r-project.org/web/packages/distinctiveness/index.html"
                >
                  Published the package to CRAN
                </a>
                , distributing the package to users in many R development
                environments.
              </li>
              <li>
                Optimized the{" "}
                <a
                  target="_tab"
                  rel="noopener noreferrer"
                  href="https://semanticbrandscore.com/"
                >
                  SBS App
                </a>
                's learning algorithms by implementing parallel processing
                strategies
              </li>
            </ul>
          </div>
          <div className="timeline-image">
            <img src={perugiaImage} alt="University of Perugia BCI lab logo" />
          </div>
        </div>
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-content">
            <h2>Lead Web Developer, Envision Exotics</h2>
            <h4>March 2023 - September 2023</h4>
            <ul>
              <li>
                Created an online shop for exotic car rentals in Miami, FL that
                is still in use today:{" "}
                <a
                  target="_tab"
                  rel="noopener noreferrer"
                  href="https://envisionexotics.com"
                >
                  envisionexotics.com
                </a>
              </li>
              <li>
                Developed functionality for customers to reserve times and dates
                for specific cars in inventory.
              </li>
              <li>
                Designed infrastructure to handle payments, security deposits,
                e-signing of rental agreements, and intake/verification of
                driver's licenses and insurance information.
              </li>
            </ul>
          </div>
          <div className="timeline-image">
            <img src={envisionImage} alt="Envision Exotics logo" />
          </div>
        </div>
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-content">
            <h2>Software Engineering Intern, EMR Direct</h2>
            <h4>September 2020 - December 2020</h4>
            <ul>
              <li>
                Created web pages for customers to engage with our products in
                HTML/CSS/PHP.
              </li>
              <li>
                Worked with REST APIs to ensure the secure transmission of
                health information over a national network of hospitals and
                patients.
              </li>
              <li>
                Used REST APIs to make health records accessible in accordance
                with HL7 standards to doctors/patients.
              </li>
            </ul>
          </div>
          <div className="timeline-image">
            <img src={emrDirectImage} alt="EMR Direct logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
