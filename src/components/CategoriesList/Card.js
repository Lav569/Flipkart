import React from "react";
import "./Card.css";

// general component
// structure

// Destructuring - { image, text }

function Card({ image, text }) {
  return (
    <div className="single_category">
      <img src={image} alt="{text} images"/>
      <p>{text}</p>
    </div>
  );
}
export default Card;