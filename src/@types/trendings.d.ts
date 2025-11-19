export type MovieTrending = {
  id: number;
  media_type: "movie";
  title: string;
  original_title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  video: boolean;
  vote_count: number;
  vote_average: number;
};

export type MovieDetails = Omit<MovieTrending, "media_type" | "video"> & {
  overview: string;
  homepage: string;
};

export interface ITrendings extends MovieTrending {
  page: number;
  results: MovieTrending[];
  total_pages: number;
  total_results: number;
}
