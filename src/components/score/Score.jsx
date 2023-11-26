import React from "react";
import PropTypes from "prop-types";
import "./Score.scss";
const Score = ({ gameScore, gameRound, bestScore }) => {
  return (
    <div className="score">
      <div className="score-details">
        <p className="current-score">
          Score: <span>{gameScore}</span>
        </p>
        <p className="best-score">
          Best Score 💎 <span>{bestScore}</span>
        </p>
      </div>
      <div className="progress">
        <p>
          <span>
            {gameScore} / {gameRound}
          </span>
          Round
        </p>
      </div>
    </div>
  );
};

Score.propTypes = {
  gameScore: PropTypes.number.isRequired,
  gameRound: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};
export default Score;
