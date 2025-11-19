export type MovieTrending = {
  id: number;
  media_type: "movie";
  title: string;
  original_title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface ITrendings extends MovieTrending {
  page: number;
  results: MovieTrending[];
  total_pages: number;
  total_results: number;
}
