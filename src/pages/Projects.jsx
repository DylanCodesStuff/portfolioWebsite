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

  // <div className="projects-page-container">
  //   <div className="projects-gallery-header">
  //     <h1>Projects Gallery</h1>
  //   </div>
  //   <div className="cards">
  //     <Card
  //       image="pokemonthumbnail.jpg"
  //       header="Pokemon Paradise"
  //       paragraph={dataHolder.pokemonParadise.text}
  //       techList={dataHolder.pokemonParadise.technologies}
  //     />
  //     <Card
  //       image="a1sealing.jpg"
  //       header="A1 Sealing"
  //       paragraph={dataHolder.A1Sealing.text}
  //       techList={dataHolder.A1Sealing.technologies}
  //     />
  //     <Card
  //       image="https://ak.picdn.net/shutterstock/videos/1032549521/thumb/11.jpg?ip=x480"
  //       header="Data Visualization"
  //       paragraph={dataHolder.dataVisualization.text}
  //       techList={dataHolder.dataVisualization.technologies}
  //     />
  //
  //   </div>
  // </div>

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
                image="pokemonthumbnail.jpg"
                header="Pokemon Paradise"
                paragraph={dataHolder.pokemonParadise.text}
                techList={dataHolder.pokemonParadise.technologies}
              />
            </div>
            <div>
              <Card
                image="a1sealing.jpg"
                header="A1 Sealing"
                paragraph={dataHolder.A1Sealing.text}
                techList={dataHolder.A1Sealing.technologies}
              />
            </div>
            <div>
              {" "}
              <Card
                image="dashboard.png"
                header="Data Visualization"
                paragraph={dataHolder.dataVisualization.text}
                techList={dataHolder.dataVisualization.technologies}
              />
            </div>
            <div>Item 4</div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;
