import "./normalize.css";
import "./App.css";
import GameMode from "./components/gameMode/GameMode";
import GameBoard from "./components/gameBoard/gameBoard";
import usePokemon from "./utils/usePokemon";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loadingScreen/LoadingScreen";
import CardFilp from "./assets/card-flip.mp3";
import win from "./assets/win.mp3";
import lose from "./assets/lose.mp3";
import playAudio from "./utils/playAudio";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const fildCardAudio = new Audio(CardFilp);
const gameWin = new Audio(win);
const gameLose = new Audio(lose);
fildCardAudio.volume = 0.2;
gameWin.volume = 0.2;
gameLose.volume = 0.2;

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [gameRound, setGameRound] = useState(0);
  const [gameFinish, setGameFinish] = useState(false);
  const [gameMode, setGameMode] = useState("");
  const [gameStatus, setGameStatus] = useState("win");

  const [bestScore, setBestScore] = useState(
    localStorage.getItem("bets-score") || 0
  );
  const [gameScore, setGameScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showFront, setShowFront] = useState(true);

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
    setShowFront(true);
  };

  useEffect(() => {
    const isWin = gameRound === gameScore;
    if (isWin) {
      setGameStatus("Win");
      setGameFinish(true);
      playAudio(gameWin);
    }

    if (gameScore > bestScore) {
      setBestScore(gameScore);
      localStorage.setItem("best-score", gameScore);
    }
  }, [gameScore, gameRound, bestScore]);

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

  const handleGameLevelUp = () => {
    const pokemonLists = getPokemonLists(pokemons.length + INCREMENT_STEP);
    setGameStart(true);
    setGameFinish(false);
    setIsLoading(true);
    setGameRound(pokemons.length + INCREMENT_STEP);

    setTimeout(async () => {
      setPokemons(await pokemonLists);
      setIsLoading(false);
      setShowFront(true);
    }, CARD_SLEEP_TIME);
  };
  const markCardAsClicked = (index) => {
    const updatedPokemons = [...pokemons];
    updatedPokemons[index].isClicked = true;
    setPokemons(updatedPokemons);
    console.log(pokemons);
  };

  const handleCardClick = async (cardIndex) => {
    setShowFront(false);

    const card = pokemons[cardIndex];
    if (card.isClicked) {
      playAudio(gameLose);
      setGameStatus("Lose");
      setGameFinish(true);
      return;
    }

    markCardAsClicked(cardIndex);
    increaseScore();

    const everyCardClicked = pokemons.every((card) => card.isClicked);
    if (!everyCardClicked) {
      playAudio(fildCardAudio);

      await new Promise((resolve) => setTimeout(resolve, CARD_SLEEP_TIME));
      shufflePokemonLists();
      setShowFront(true);
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
          bestScore={bestScore}
          gameRound={gameRound}
          gameStatus={gameStatus}
          gameFinish={gameFinish}
          cardClick={handleCardClick}
          onRestart={handleGameRestart}
          onQuit={handleGameExit}
          onContinue={handleGameLevelUp}
          showFront={showFront}
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
