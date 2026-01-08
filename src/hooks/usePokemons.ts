import { useQuery } from "@tanstack/react-query";

export const usePokemons = (page: number) => {
  const limit = 20;
  const offset = (page - 1) * limit;
  return useQuery({
    queryKey: ["pokemons", page],
    queryFn: async () => {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset
      );
      const data = await res.json();
      return data.results;
    },
    staleTime: 1000 * 60 * 1,
  });
};
