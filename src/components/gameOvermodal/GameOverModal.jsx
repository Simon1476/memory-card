import React from "react";
import "./GameOverModal.scss";

const GameOverModal = ({ gameStatus, onRestart, gameRound, onQuit }) => {
  return (
    <div className="overlay">
      <div className="game-over-modal">
        <h4>You {gameStatus}</h4>
        <button
          type="button"
          className="restart-btn"
          onClick={() => {
            onRestart(gameRound);
          }}
        >
          Restart
        </button>
        <button className="exit-btn" onClick={onQuit}>
          ⚔
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;
