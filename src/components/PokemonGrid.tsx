import { useEffect, useState } from "react";
import type { Pokemon } from "../types/types";
import PokemonCard from "./PokemonCard";

// klient komponent
function PokemonGrid() {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  return (
    <div className="bg-[url('https://wallpapercave.com/wp/wp10311654.png')] min-h-screen bg-cover bg-no-repeat bg-fixed">
      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4 mx-4 pt-4">
        {pokemons?.map((pokemon) => {
          return <PokemonCard key={pokemon.name} url={pokemon.url} />;
        })}
      </div>
    </div>
  );
}

export default PokemonGrid;
