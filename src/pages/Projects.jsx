import React from "react";
import Card from "../components/Card";
import "../styles/projects.css";
import { data } from "../data/card-data";

const dataHolder = data;
//retrieves and stores the text from our data file.
//This is meant to serve as a way to reduce clutter in this file

console.log(dataHolder.pokemonParadise.technologies);
function Projects() {
  return (
    <div className="projects-page-container">
      <div className="projects-gallery-header">
        <h1>Projects Gallery</h1>
      </div>
      <div className="cards">
        <Card
          image="pokemonthumbnail.jpg"
          header="Pokemon Paradise"
          paragraph={dataHolder.pokemonParadise.text}
          techList={dataHolder.pokemonParadise.technologies}
        />
        <Card
          image="a1sealing.jpg"
          header="A1 Sealing"
          paragraph={dataHolder.A1Sealing.text}
          techList={dataHolder.A1Sealing.technologies}
        />
      </div>
    </div>
  );
}

export default Projects;
