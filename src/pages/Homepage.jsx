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
    </>
  );
}

export default Homepage;
