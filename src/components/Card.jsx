import React from "react";
import "../styles/card.css";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
function Card(props) {
  const techListItem = props.techList?.map((item) => (
    <li className="li-element" key={nanoid()}>
      <img
        className="tech-images"
        src={`images/${item.toLowerCase()}.png
      `}
      />
      {item}
    </li>
  ));

  return (
    <div className="card-container">
      <div className="card-wrapper">
        <Link
          rel="noopener noreferrer"
          target="_blank"
          to={`${props.externalUrl}`}
        >
          <img className="image" src={`/images/${props.image}`} />

          <h3 className="projects-page-text1">{props.header}</h3>
        </Link>

        <p className="projects-page-text2">{props.paragraph}</p>
        <h2 className="projects-page-text3">Technologies Used:</h2>
        <ul className="tech-list-ul">{techListItem ? techListItem : null}</ul>
      </div>
    </div>
  );
}

export default Card;
