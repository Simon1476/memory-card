import React from "react";
import "./LoadingScreen.scss";
import pokeBall from "../../assets/pokeball.png";
const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src={pokeBall} alt="Pokeball" />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
