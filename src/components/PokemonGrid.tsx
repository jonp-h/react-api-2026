import { useEffect, useState } from "react";
import type { Pokemon } from "../types/types";
import PokemonCard from "./PokemonCard";
import { usePokemons } from "../hooks/usePokemons";

// klient komponent
function PokemonGrid() {
  //   useEffect(() => {
  //     fetch("https://URL", {
  //       headers: {
  //         "x-api-key": "YOUR_API_KEY",
  //       },
  //     })
  //          .then((res) => res.json())
  //       .then((data) => {
  //          do stuff
  //       });
  //   }, []);

  const { data: pokemonList, isError, isLoading, isPending } = usePokemons();

  if (isError) {
    return <div>Error loading pokemons.</div>;
  }

  if (isLoading || isPending) {
    return <div>Loading pokemons...</div>;
  }

  return (
    <div className="bg-[url('https://wallpapercave.com/wp/wp10311654.png')] min-h-screen bg-cover bg-no-repeat bg-fixed">
      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4 mx-4 pt-4">
        {pokemonList?.map((pokemon) => {
          return <PokemonCard key={pokemon.name} url={pokemon.url} />;
        })}
      </div>
    </div>
  );
}

export default PokemonGrid;
