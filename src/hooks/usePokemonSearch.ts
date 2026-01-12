import { useQuery } from "@tanstack/react-query";

export const usePokemonSearch = (search: string) => {
  return useQuery({
    queryKey: ["pokemons", search],
    queryFn: async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + search);

      if (!res.ok) {
        return res.text();
      }
      const data = await res.json();
      return data;
    },
    staleTime: 1000 * 60 * 1,
  });
};
