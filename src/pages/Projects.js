import React from 'react';
import './Projects.css';

// Define project image paths
const photoEditingImg = 'assets/images/programwithimageopen.png';
const connectFourImg = 'assets/images/c4ai.png';
const samoShowdownImg = 'assets/images/fighter.png';
const mazeGameImg = 'assets/images/maze.png';

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>

      <section className="project-section">
        <h2>Photo Editing Software</h2>
        <p><strong>Standalone Java program (~1200 lines of code) made in IntelliJ</strong></p>
        <p><em>May 2022 - June 2022</em></p>
        <p>
          Enabled users to perform many image manipulations, including resizing, applying filters (sepia, greyscale, blur, horizontal/vertical flips, etc.), and to save/load photos to/from user’s computer.
        </p>
        <img src={photoEditingImg} alt="Photo Editing Software" className="project-image"/>
      </section>

      <section className="project-section">
        <h2>Connect Four AI</h2>
        <p><strong>Python Connect Four AI player made in Jupyter Notebooks</strong></p>
        <p><em>February 2022 – March 2022</em></p>
        <p>
          Engineered a heuristic to determine the quality of a Connect Four game state for either player.
        </p>
        <p>
          Employed this heuristic in an A* depth-first search to compute the best possible move for the AI player to make (considering its opponent’s best possible moves) to a specified depth of moves.
        </p>
        <p>  
          Integrated this search technique into a standalone function to compute the AI player’s move, allowing the user to play against the AI player or pit it against another AI player.
        </p>
        <img src={connectFourImg} alt="Connect Four AI" className="project-image"/>
      </section>

      <section className="project-section">
        <h2>
          <a href="https://github.com/lcmaas4/t2-fighter" target="_blank" rel="noopener noreferrer">
            Samo Showdown
          </a>
        </h2>
        <p><strong>HTML/JavaScript/CSS fighting game made in Notepad++</strong></p>
        <p><em>January 2020 - June 2020</em></p>
        <p>
          Coded JavaScript logic to handle user actions, game states, and combatant health. 
        </p>
        <p>
          Implemented spritesheets to animate the movement of the character. 
        </p>
        <p>
          Won 2021 Silvergames.com student scholarship competition, and a $2000 scholarship.
        </p>
        <img src={samoShowdownImg} alt="Samo Showdown" className="project-image"/>
      </section>

      <section className="project-section-last">
        <h2>Maze Game</h2>
        <p><strong>Java program which randomly generates and then solves a maze of arbitrary size</strong></p>
        <p><em>April 2022</em></p>
        <p>
          Uses a modified version of Kruskal’s algorithm to generate a maze of a size specified by the user by using the arrow keys to increase/decrease horizontal/vertical dimensions from the starting size. 
        </p>
        <p>
          Allows users to visualize the “knocking down” of the walls tick-by-tick to create the maze from a full grid. 
        </p>
        <p>
          Solves the maze using either breadth-first or depth-first search.
        </p>
        <img src={mazeGameImg} alt="Maze Game" className="project-image"/>
      </section>
    </div>
  );
}

export default Projects;