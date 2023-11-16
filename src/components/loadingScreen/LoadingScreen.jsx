import React from "react";
import "./LoadingScreen.scss";
const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src="/pokeball.png" alt="Pokeball" />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;
