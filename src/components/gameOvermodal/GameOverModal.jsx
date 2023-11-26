import React from "react";
import PropTypes from "prop-types";
import "./GameOverModal.scss";

const GameOverModal = ({
  gameStatus,
  onRestart,
  gameRound,
  onQuit,
  onContinue,
}) => {
  return (
    <div className="overlay">
      <div className="game-over-modal">
        <h4>You {gameStatus}</h4>
        <div className="btn">
          <button
            type="button"
            className="restart-btn"
            onClick={() => {
              onRestart(gameRound);
            }}
          >
            Restart
          </button>
          <button type="button" className="exit-btn" onClick={onQuit}>
            Exit
          </button>
          {gameStatus === "Win" && (
            <button type="button" onClick={onContinue}>
              Level Up
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

GameOverModal.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  onRestart: PropTypes.func.isRequired,
  gameRound: PropTypes.number.isRequired,
  onQuit: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
};

export default GameOverModal;
