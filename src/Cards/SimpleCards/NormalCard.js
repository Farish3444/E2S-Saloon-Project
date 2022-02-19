import React from "react";
import "./normalcard.css";

const NormalCard = ({ image, headtitle, imagetitle }) => {
  return (
    <div>
      <h2>{headtitle}</h2>
      <div class="card-container">
        <img src={image} />
        <div class="overlay">{imagetitle}</div>
      </div>
    </div>
  );
};

export default NormalCard;
