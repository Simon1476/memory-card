import React from "react";
import "./GameMode.scss";
const GameMode = () => {
  return (
    <div className="gameMode">
      <div className="title">
        <img src="/pokemon-title.png" alt="pokemon-title" />
      </div>
      <div className="btn">
        <button type="button">Easy</button>
        <button type="button">Medium</button>
        <button type="button">Hard</button>
      </div>
      <p>Select your game level!</p>
    </div>
  );
};

export default GameMode;
