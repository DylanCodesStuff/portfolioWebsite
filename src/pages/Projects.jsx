import React from "react";
import Card from "../components/Card";
import "../styles/projects.css";
import { data } from "../data/card-data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const dataHolder = data;
//retrieves and stores the text from our data file.
//This is meant to serve as a way to reduce clutter in this file

console.log(dataHolder.pokemonParadise.technologies);
function Projects() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="projects-page-container">
      <div className="App">
        <div className="projects-gallery-header">
          <h1 className="header-text-gallery">Project Gallery</h1>
        </div>
        <div className="carousel-container">
          <Carousel responsive={responsive}>
            <div>
              <Card
                image="zombiebackground.jpg"
                header="The Walking Deadle"
                paragraph={dataHolder.theWalkingDeadle.text}
                techList={dataHolder.theWalkingDeadle.technologies}
                externalUrl={dataHolder.theWalkingDeadle.externalUrl}
              />
            </div>
            <div>
              <Card
                image="pokemonthumbnail.jpg"
                header="Pokemon Paradise"
                paragraph={dataHolder.pokemonParadise.text}
                techList={dataHolder.pokemonParadise.technologies}
                externalUrl={dataHolder.pokemonParadise.externalUrl}
              />
            </div>
            <div>
              <Card
                image="a1sealing.jpg"
                header="A1 Sealing"
                paragraph={dataHolder.A1Sealing.text}
                techList={dataHolder.A1Sealing.technologies}
                externalUrl={dataHolder.A1Sealing.externalUrl}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;
