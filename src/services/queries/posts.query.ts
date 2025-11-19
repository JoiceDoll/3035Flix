import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../repositories/movies.repository";

export const useShops = () => {
  return useQuery({
    queryKey: ["trendings"],
    queryFn: getTrendingMovies,
    retry: 0,
    staleTime: 1000 * 60 * 60 * 1,
  });
};
