import React from "react";
import "./GameOverModal.scss";
const GameOverModal = () => {
  return (
    <div className="game-over-modal">
      <h4>You Win</h4>
      <button type="button">Restart</button>
      <button className="exit">⚔</button>
    </div>
  );
};

export default GameOverModal;
