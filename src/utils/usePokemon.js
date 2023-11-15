import React, { useState } from "react";

const usePokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
  const POKEMON_LIST_NUMBERS = 1000;

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

  const getPokemonLists = async (number) => {
    const pokemonLists = [];
    let tries = 0;

    while (pokemonLists.length < number && tries < 100) {
      const randomId = Math.floor(Math.random() * POKEMON_LIST_NUMBERS) + 1;

      const isDuplicateIdFound = pokemonLists.find(({ id }) => id === randomId);
      if (isDuplicateIdFound) tries++;
      else pokemonLists.push(randomId);
    }

    return await Promise.all(pokemonLists.map(getPokemon));
  };
  return { getPokemon, getPokemonLists, pokemons, setPokemons };
};

export default usePokemon;
