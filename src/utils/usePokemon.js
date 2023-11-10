import React from "react";

const usePokemon = () => {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  const getPokemon = async (id) => {
    try {
      const res = await fetch(`${apiUrl}${id}`);
      const { species, sprites } = await res.json();

      // Now you can use 'species' and 'sprites' in your code
      const { name } = species;
      const frontDefault = sprites.front_default;
      return { name, frontDefault };
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      throw error; // Re-throw the error to handle it elsewhere if needed
    }
  };

  return { getPokemon };
};

export default usePokemon;
