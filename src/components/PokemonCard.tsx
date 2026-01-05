import { useEffect, useState } from "react";
import type { Pokemon } from "../types/types";

function PokemonCard({ url }: { url: string }) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [url]);

  return (
    <div className="border-black border-2 rounded-xl shadow-xl bg-black/40 backdrop-blur">
      <p className=" text-2xl text-center text-white font-bold">
        {pokemon?.name}
      </p>
      <img
        src={pokemon?.sprites.other["official-artwork"].front_default}
        alt={pokemon?.name}
      />
    </div>
  );
}

export default PokemonCard;
