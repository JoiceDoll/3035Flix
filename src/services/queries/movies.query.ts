import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  getTrendingMovies,
  getMovie,
  searchMovie,
} from "../repositories/movies.repository";

export const useFindTrendings = () => {
  return useInfiniteQuery({
    queryKey: ["trendings"],
    queryFn: ({ pageParam = 1 }) => getTrendingMovies(pageParam),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      const totalPages = lastPage.total_pages;
      const nextPage = lastPage.page + 1;

      return nextPage <= totalPages ? nextPage : undefined;
    },
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
