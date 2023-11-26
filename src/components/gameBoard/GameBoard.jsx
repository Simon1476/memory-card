import PropTypes from "prop-types";
import Card from "../card/Card";
import Score from "../score/Score";
import "./GameBoard.scss";
import GameOverModal from "./../gameOvermodal/GameOverModal";
import pikaChu1 from "../../assets/pikachu1.png";

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
        <img src={pikaChu1} alt="pikachu" />
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

GameBoard.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Add more PropTypes for other properties of the 'card' object if necessary
    })
  ).isRequired,
  gameMode: PropTypes.string.isRequired,
  gameScore: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
  cardClick: PropTypes.func.isRequired,
  gameRound: PropTypes.number.isRequired,
  gameStatus: PropTypes.string.isRequired,
  gameFinish: PropTypes.bool.isRequired,
  onRestart: PropTypes.func.isRequired,
  onQuit: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
  showFront: PropTypes.bool.isRequired,
};

export default GameBoard;
