import { httpClient } from "../http-client";
import { MOVIES } from "../endpoints";
import type { AxiosResponse } from "axios";
import type { ITrendings } from "../../@types/trendings";

export const getTrendingMovies = async (): Promise<
  AxiosResponse<{ results: ITrendings[] }>
> => {
  return httpClient.get(MOVIES.GET_TRENDINGS);
};
