import Card from "../card/Card";
import Score from "../score/Score";
import "./GameBoard.scss";
import GameOverModal from "./../gameOvermodal/GameOverModal";
import { useState } from "react";

const GameBoard = ({
  cards,
  gameMode,
  gameScore,
  bestScore,
  cardClick,
  gameRound,
  gameStatus,
  gameFinish,
  onRestart,
  onQuit,
  onContinue,
  showFront,
}) => {
  return (
    <div className="game-board">
      <button className="title" onClick={onQuit}>
        <img src="/pikachu1.png" alt="pikachu" />
        <span>Pokemon</span>
      </button>
      <Score
        gameScore={gameScore}
        gameRound={gameRound}
        bestScore={bestScore}
      />
      {gameFinish && (
        <GameOverModal
          gameStatus={gameStatus}
          gameRound={gameRound}
          onRestart={onRestart}
          onQuit={onQuit}
          onContinue={onContinue}
        />
      )}
      <div className={`cards ${gameMode}`}>
        {cards.map((card, index) => (
          <Card
            card={card}
            key={card.id}
            cardClick={() => {
              cardClick(index);
            }}
            showFront={showFront}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
