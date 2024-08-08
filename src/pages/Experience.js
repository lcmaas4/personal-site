import React, { useEffect } from 'react';
import './Experience.css'; // Custom CSS for the Experience component
import AOS from 'aos';
import 'aos/dist/aos.css';

const lumenImage = "assets/images/lumen.png"
const perugiaImage = "assets/images/perugia.jpg"
const envisionImage = "assets/images/envisionexotics.png"
const emrDirectImage = "assets/images/emrdirect.png"

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="experience-container">
      <h1>Work Experience</h1>
      <div className="timeline">
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-date-end">August 2024</div>
          <div className="timeline-content">
            <h2>Software Developer Intern, Lumen Technologies</h2>
            <ul>
              <li>Collaborated in an Agile framework, participating in daily stand-ups to share work and resolve blockers.</li>
              <li>Analyzed and resolved issues in JSON schema validation packages, ensuring accurate processing of customer network service requests and improving system reliability.</li>
              <li>Migrated nightly Yang/XML FitNesse tests to new lab devices, ensuring code correctness and efficiency.</li>
              <li>Leveraged my strong background in algorithms and data structures to optimize memory usage and runtime of Groovy scripts, enhancing the performance of parsing service requests from network customers.</li>
            </ul>
          </div>
          <div className="timeline-image">
              <img src={lumenImage} alt="Lumen Technologies logo" />
          </div>
          <div className="timeline-date-start">May 2024</div>
        </div>
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-date-end">December 2023</div>
          <div className="timeline-content">
            <h2>AI Software Development/Research Co-op, University of Perugia (Italy)</h2>
            <ul>
              <li>Developed an <a 
                target="_tab" rel="noopener noreferrer" href="https://github.com/iandreafc/distinctiveness-R"> R package
                </a> for computing metrics of Distinctiveness Centrality, a metric to interpret graphical data, used in the Semantic Brand Score (SBS) Business Intelligence App.</li>
              <li><a target="_tab" rel="noopener noreferrer" href="https://cran.r-project.org/web/packages/distinctiveness/index.html">Published the package to CRAN</a>, distributing the package to users in many R development environments.</li>
              <li>Optimized the performance of the <a target="_tab" rel="noopener noreferrer" href="https://semanticbrandscore.com/">SBS App</a> by implementing parallel processing strategies.</li>
            </ul>
          </div>
          <div className="timeline-image">
              <img src={perugiaImage} alt="University of Perugia BCI lab logo" />
          </div>
          <div className="timeline-date-start">September 2023</div>
        </div>
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-date-end">September 2023</div>
          <div className="timeline-content">
            <h2>Lead Web Developer, Envision Exotics</h2>
            <ul>
              <li>Created an online shop for exotic car rentals in Miami, FL that is still in use today: <a
                target="_tab" rel="noopener noreferrer" href="https://envisionexotics.com">envisionexotics.com
            </a>
              </li>
              <li>Developed functionality for customers to reserve times and dates for specific cars in inventory.</li>
              <li>Designed infrastructure to handle payments, security deposits, e-signing of rental agreements, and intake/verification of driver's licenses and insurance information.</li>
            </ul>
          </div>
          <div className="timeline-image">
              <img src={envisionImage} alt="Envision Exotics logo" />
          </div>
          <div className="timeline-date-start">March 2023</div>
        </div>
        <div className="timeline-item" data-aos="fade-up">
          <div className="timeline-date-end">September 2020</div>
          <div className="timeline-content">
            <h2>Software Engineering Intern, EMR Direct</h2>
            <ul>
              <li>Developed software to ensure product compliance with HL7 FHIR industry standards in Java.</li>
              <li>Created web pages for customers to engage with our products in HTML/CSS/PHP.</li>
              <li>Maintained an end-to-end encrypted messaging system between healthcare providers and patients.</li>
            </ul>
          </div>
          <div className="timeline-image">
              <img src={emrDirectImage} alt="EMR Direct logo" />
          </div>
          <div className="timeline-date-start">June 2020</div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
