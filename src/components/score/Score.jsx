import React from "react";
import "./Score.scss";
const Score = ({ gameScore, gameRound }) => {
  return (
    <div className="score">
      <div className="score-details">
        <p className="current-score">
          Score: <span>{gameScore}</span>
        </p>
        <p className="best-score">
          Best Score 💎 <span>4</span>
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

export default Score;
