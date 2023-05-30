import React from "react";
import "../styles/homepage.css";
function Homepage() {
  return (
    <>
      <div className="hero">
        <div className="intro-section">
          <div className="top-text">
            <h1 className="intro-line">Frontend Developer</h1>
            <h3 className="intro-line2">
              I create websites with simple and minimilalistic qualities in
              mind.
            </h3>
          </div>
          <div className="image-container">
            <img className="img-pfp" src=".././images/profile-pic.png" />
          </div>
        </div>
        <div className="bottomView-image-container">
          <img className="bottomView-image" src="../images/computerssvg.svg" />
        </div>
      </div>
      <div className="second-section">
        <div className="welcome-text-container">
          <h2 className="welcome-text">
            Hey, I'm Dylan. Welcome to my Portfolio
          </h2>
          <div className="bio-text-container">
            <h4 className="bio-text">
              While pursuing my degree in Finance, I minored in Information
              Systems, giving me a glimpse into the world of programming. After
              graduating, I have been constantly learning about software
              development, as I aspire to hold the title of employed self-taught
              dev. My style revolves around minimalism, while simultaneously
              maintaining maximum functionality. Thanks for checking me out!
            </h4>
          </div>
        </div>
      </div>
      <div className="tech-stack-wrapper">
        <div className="tech-stack-container">
          <h3 className="tech-stack-text">Preferred Tech Stack</h3>
          <img className="tech-stack-img" src="../images/techstack.png" />
        </div>
      </div>
      <div className="homepage-projects">
        <div className="project project-1">
          <div className="pokemon-image-container">
            <img
              className="pokemon-image proj-img"
              src="../images/pokemonthumbnail.jpg"
            />
            <button className="proj-button">View Site</button>
            <div className="portfolio-overlay"></div>
          </div>
          <div className="proj-text">
            <h2>Pokemon Paradise</h2>
            <p>
              This pokemon inspired app uses external api's to retrieve data and
              dynamically update the page based on what you searched for!
            </p>
          </div>
        </div>
        <div className="project project-2">
          <div className="a1sealing-image-container">
            <img
              className="a1sealing-image proj-img"
              src="https://a1sealingtest.netlify.app/assets/pexels-nout-gons-248159-da12e9f5.jpg"
            />
          </div>
          <div className="proj-text">
            <h2>A1 Sealing Live Business Site</h2>
            <p>
              This website is currently serving a real client! They are a simple
              asphalt sealing business, requesting a simple site to
              differentiate from their competitors!
            </p>
          </div>
        </div>
        <div className="project project-3">
          <div className="dashboard-image-container">
            <img
              className="dashboard-image proj-img"
              src="https://ak.picdn.net/shutterstock/videos/1032549521/thumb/11.jpg?ip=x480"
            />
          </div>
          <div className="proj-text">
            <h2>Data Visualization Dashboard</h2>
            <p>
              This teaih cioah the ojca wsewbsite will serve clients tfi theis
              before shitpipng wathe website out this need.s updates
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;