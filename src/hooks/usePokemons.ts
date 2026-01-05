import { useQuery } from "@tanstack/react-query";

export const usePokemons = () => {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await res.json();
      return data.results;
    },
    staleTime: 1000 * 60 * 1,
  });
};
