import React from "react";
import "./Score.scss";
const Score = () => {
  return (
    <div className="score">
      <div className="score-details">
        <p className="current-score">
          Score: <span>5</span>
        </p>
        <p className="best-score">
          Best Score 💎 <span>4</span>
        </p>
      </div>
      <div className="progress">
        <p>
          <span>1 / 5</span> Round
        </p>
      </div>
    </div>
  );
};

export default Score;
