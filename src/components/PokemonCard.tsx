import { usePokemon } from "../hooks/usePokemon";

function PokemonCard({ url }: { url: string }) {
  const {
    data: pokemon,
    isLoading,
    isError,
    isPending,
    error,
  } = usePokemon(url);

  if (isError) {
    return <div>{error?.message}</div>;
  }

  if (isLoading || isPending) {
    return <div>Loading...</div>;
  }

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
