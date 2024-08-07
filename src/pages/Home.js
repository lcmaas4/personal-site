import React from 'react';
import './Home.css'; // Custom CSS for the Home component

function Home() {
  return (
    <div className="hero-section">
      <div className="hero-image">
        <img src="../assets/images/Me@BrinaGrad.PNG" alt="Hero" className="small-image" />
      </div>
      <div className="hero-content">
        <h1>Hi, I'm Louie Maas</h1>
        <p>I'm a software developer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
        <a href="/projects" className="cta-button">View My Work</a>
      </div>
    </div>
  );
}

export default Home;