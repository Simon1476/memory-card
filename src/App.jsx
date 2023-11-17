import "./normalize.css";
import "./App.css";
import GameMode from "./components/gameMode/GameMode";
import GameBoard from "./components/gameBoard/gameBoard";
import usePokemon from "./utils/usePokemon";
import { useState } from "react";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";
import Score from "./components/score/Score";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [gameRound, setGameRound] = useState(0);
  const [gameFinish, setGameFinish] = useState(false);
  const [gameMode, setGameMode] = useState("");
  const [gameStatus, setGameStatus] = useState("win");

  const [bestScore, setBestScore] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [cardsShowing, setCardsShowing] = useState(false);

  const { shufflePokemonLists, getPokemonLists, pokemons, setPokemons } =
    usePokemon();

  const INCREMENT_STEP = 2;
  const MIN_LOAD_TIME = 250;
  const CARD_SLEEP_TIME = 800;
  const initializePokemons = async (amount) => {
    const pokemonLists = getPokemonLists(amount);

    setIsLoading(true);

    setPokemons(await pokemonLists);
    setIsLoading(false);

    await sleep(CARD_SLEEP_TIME);
    setCardsShowing(true);
  };

  const increaseScore = () => {
    setGameScore((prevScore) => prevScore + 1);
  };

  const handleChangeGameMode = (gameMode) => {
    setGameMode(gameMode);
  };

  const handleGameStart = (gameLevel) => {
    setGameRound(gameLevel); // Set gameRound based on gameLevel
    setGameStart(true);
    initializePokemons(gameLevel);
    setGameFinish(false);
  };

  const handleGameRestart = (gameLevel) => {
    setGameRound(gameLevel); // Set gameRound based on gameLevel
    setGameStart(true);
    initializePokemons(gameLevel);
    setGameFinish(false);
    setGameScore(0);
  };
  const handleGameExit = () => {
    setGameFinish(false);
    setGameStart(false);
    setGameScore(0);
  };
  // const handleGameFinish = () => {
  //   setGameStart(false);
  //   setGameScore(0);
  // };

  const markCardAsClicked = (index) => {
    const updatedPokemons = [...pokemons];
    updatedPokemons[index].isClicked = true;
    setPokemons(updatedPokemons);
    console.log(pokemons);
  };

  const handleCardClick = async (cardIndex) => {
    const card = pokemons[cardIndex];
    if (card.isClicked) {
      setGameStatus("Lose");
      setGameFinish(true);
      return;
    }

    markCardAsClicked(cardIndex);
    increaseScore();

    const everyCardClicked = pokemons.every((card) => card.isClicked);
    if (!everyCardClicked) {
      await new Promise((resolve) => setTimeout(resolve, CARD_SLEEP_TIME));
      setCardsShowing(true);
      shufflePokemonLists();
    }

    const isWin = pokemons.length === gameScore;
    if (isWin) {
      setGameStatus("Win");
      setGameFinish(true);
    }
  };

  return (
    <div className="App">
      {isLoading && <LoadingScreen />}
      {gameStart && !isLoading && (
        <GameBoard
          cards={pokemons}
          gameMode={gameMode}
          gameScore={gameScore}
          gameRound={gameRound}
          gameStatus={gameStatus}
          gameFinish={gameFinish}
          cardClick={handleCardClick}
          onRestart={handleGameRestart}
          onQuit={handleGameExit}
        />
      )}
      {!gameStart && (
        <GameMode
          gameOn={handleGameStart}
          handleChangeGameMode={handleChangeGameMode}
        />
      )}
    </div>
  );
}

export default App;
