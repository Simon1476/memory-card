import React, { useState } from "react";
import "./Card.scss";

const Card = ({ card, cardClick, showFront }) => {
  return (
    <div className="card-container">
      {showFront ? (
        <div className="card front">
          <button type="button" onClick={cardClick}>
            <img src={card.frontDefault} alt={card.name} />
            <p>{card.name}</p>
          </button>
        </div>
      ) : (
        <div className="card back">
          <img src="/card-back.png" alt="" />
        </div>
      )}
    </div>
  );
};

export default Card;
