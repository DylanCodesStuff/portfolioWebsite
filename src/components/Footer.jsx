import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      {" "}
      <div className="footer">
        <div className="layer-container">
          <div className="layer">
            <div className="left-layer">
              <p> Thanks for viewing!</p>
            </div>
            <div className="right-layer">
              <button className="back-top">Back to Top</button>
            </div>
          </div>
        </div>
        <div className="links">
          <h3 className="footer-name">Dylan Scriven</h3>
        </div>
        <div className="socials-container">
          <div className="socials">
            <Link
              className="socials-link"
              rel="noopener noreferrer"
              target="_blank"
              to="https://www.linkedin.com/in/dylanscriven"
            >
              <img
                className="socials-icons"
                src="../../images/linkedinicon.svg"
              />

              <p>@dylanscriven</p>
            </Link>
          </div>

          <div className="socials">
            <Link
              className="socials-link"
              rel="noopener noreferrer"
              target="_blank"
              to="mailto:dscriven16@gmail.com"
            >
              <img className="socials-icons" src="../../images/emailicon.png" />
              <p>dscriven16@gmail.com</p>
            </Link>
          </div>
          <div className="socials">
            <Link
              className="socials-link"
              rel="noopener noreferrer"
              target="_blank"
              to="tel:7164905909"
            >
              <img className="socials-icons" src="../../images/cellphone.png" />
              <p>+1 716-490-5909</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
