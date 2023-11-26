import "./GameMode.scss";
import PropTypes from "prop-types";

const GameMode = ({ gameOn, handleChangeGameMode }) => {
  return (
    <div className="gameMode">
      <div className="title">
        <img src="/pokemon-title.png" alt="pokemon-title" />
      </div>
      <div className="btn">
        <button
          type="button"
          onClick={() => {
            gameOn(5); // Call gameOn with the selected level
            handleChangeGameMode("easy");
          }}
        >
          Easy
        </button>
        <button
          type="button"
          onClick={() => {
            gameOn(8); // Call gameOn with the selected level
            handleChangeGameMode("medium");
          }}
        >
          Medium
        </button>
        <button
          type="button"
          onClick={() => {
            gameOn(10); // Call gameOn with the selected level
            handleChangeGameMode("hard");
          }}
        >
          Hard
        </button>
      </div>
      <p>Select your game level!</p>
    </div>
  );
};

GameMode.propTypes = {
  gameOn: PropTypes.func.isRequired,
  handleChangeGameMode: PropTypes.func.isRequired,
};
export default GameMode;
