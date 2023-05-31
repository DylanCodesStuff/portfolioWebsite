import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  function handleScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      {" "}
      <div className="footer">
        <div className="layer-container">
          <div className="layer">
            <div className="left-layer">
              <p> Thanks for viewing! Reach out anytime.</p>
            </div>
            <div className="right-layer">
              <Link to="">
                <button className="back-top" onClick={handleScrollTop}>
                  Back to Top
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="links">
          <div className="footer-container">
            <div className="socials-container">
              <h3 className="footer-name">Dylan Scriven</h3>
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
                  <img
                    className="socials-icons"
                    src="../../images/emailicon.png"
                  />
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
                  <img
                    className="socials-icons"
                    src="../../images/cellphone.png"
                  />
                  <p>+1 716-490-5909</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="page-links">
            <div className="nav-title">
              <h3 className="footer-name">Navigation</h3>
            </div>
            <div className="links-container">
              <div className="home-link socials-link">
                <Link to="/" rel="noopener noreferrer">
                  {" "}
                  <p>Home</p>{" "}
                </Link>
              </div>
              <div className="projects-link socials-link">
                <Link to="/projects" rel="noopener noreferrer">
                  <p>Projects</p>
                </Link>
              </div>
              <div className="about-link socials-link">
                <Link to="/about-me" rel="noopener noreferrer">
                  {" "}
                  <p>About</p>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
