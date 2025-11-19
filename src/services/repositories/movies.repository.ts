import { httpClient } from "../http-client";
import { MOVIES } from "../endpoints";
import type { AxiosResponse } from "axios";
import type { ITrendings, MovieTrending } from "../../@types/trendings";

export const getTrendingMovies = async (): Promise<
  AxiosResponse<{ results: ITrendings[] }>
> => {
  return httpClient.get(MOVIES.GET_TRENDINGS);
};

export const getMovie = async (
  id: number
): Promise<AxiosResponse<{ data: MovieTrending }>> => {
  return httpClient.get(`${MOVIES.GET_DETAIL_MOVIE}/${id}`);
};


export const searchMovie = async (
  title: string
): Promise<AxiosResponse<{ results: any }>> => {
  return httpClient.get(`${MOVIES.SEARCH_MOVIE}?query=${title}`);
};
