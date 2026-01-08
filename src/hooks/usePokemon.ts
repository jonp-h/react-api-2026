import { useQuery } from "@tanstack/react-query";

export const usePokemon = (url: string) => {
  return useQuery({
    queryKey: ["pokemon", url],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });
};
