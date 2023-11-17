import Card from "../card/Card";
import Score from "../score/Score";
import "./GameBoard.scss";
import GameOverModal from "./../gameOvermodal/GameOverModal";

const GameBoard = ({
  cards,
  gameMode,
  gameScore,
  cardClick,
  gameRound,
  gameStatus,
  gameFinish,
  onRestart,
}) => {
  return (
    <div className="game-board">
      <div className="title">Pokemon Memory Match</div>
      <Score gameScore={gameScore} gameRound={gameRound} />
      {gameFinish && (
        <GameOverModal
          gameStatus={gameStatus}
          onRestart={onRestart}
          gameRound={gameRound}
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
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
