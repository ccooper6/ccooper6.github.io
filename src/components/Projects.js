import React from "react";
import Tile from "./Tile";
import TileBuilder from "../utils/TileBuilder";
import "./Projects.css";
import winetime from "../assets/winetime.png";
import resourcestockpiling from "../assets/resourcestockpiling.png";

function Projects() {
  const projectTiles = [
    new TileBuilder()
      .setTitle("Personal Website")
      .setDescription(
        "Working with and learning React on the fly to create a personal website to showcase my projects and skills."
      )
      .setGithubLink("https://github.com/ccooper6/ccooper6.github.io")
      .setKeyAspects(["React", "JavaScript", "HTML", "CSS"])
      .setProjectType("Personal")
      .build(),
    new TileBuilder()
      .setTitle("WineTime")
      .setDescription(
        "Working in a team of 6 to create a powerful wine database catalog and recommendation app, offering personalized quizzes, challenges, and a collection of over 130,000 wines."
      )
      .setGithubLink("https://github.com/ccooper6/WineTime")
      .setImage(winetime)
      .setKeyAspects(["Java", "SQLite", "CSS", "JavaFX"])
      .setProjectType("University")
      .build(),
    new TileBuilder()
      .setTitle("Pong")
      .setDescription(
        "Working in a pair to create a pong game that ran on two UC FunKit microcontrollers which communicated over IR."
      )
      .setGithubLink("https://github.com/ccooper6/UC_FunKit_Pong")
      .setKeyAspects(["C", "Microcontrollers", "IR Communication"])
      .setProjectType("University")
      .build(),
      new TileBuilder()
      .setTitle("Resource Stockpiling")
      .setDescription(
        "Working in a pair tasked to create a game that showcased our understanding of Java and JavaFX."
      )
      .setGithubLink("https://github.com/ccooper6/Resource-Stockpiling")
      .setImage(resourcestockpiling)
      .setKeyAspects(["Java", "JavaFX"])
      .setProjectType("University")
      .build(),
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-tiles">
        {projectTiles.map((tile, index) => (
          <Tile key={index} {...tile} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
