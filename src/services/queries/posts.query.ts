import { useQuery } from "@tanstack/react-query";
import {
  getTrendingMovies,
  getMovie,
  searchMovie,
} from "../repositories/movies.repository";

export const useFindTrendings = () => {
  return useQuery({
    queryKey: ["trendings"],
    queryFn: getTrendingMovies,
    retry: 0,
    staleTime: 1000 * 60 * 60 * 1,
  });
};

export const useShowMovie = (id: number) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovie(id),
    retry: 0,
    staleTime: 1000 * 60 * 60 * 1,
  });
};

export const useSearchMovie = (title: string) => {
  return useQuery({
    queryKey: ["movie", title],
    queryFn: () => searchMovie(title),
    retry: 0,
    staleTime: 1000 * 60 * 60 * 1,
    enabled: !!title,
  });
};
