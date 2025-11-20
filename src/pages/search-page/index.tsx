import { useSearchParams } from "react-router-dom";
import { useSearchMovie } from "@/services/queries/movies.query";
import { CardSkeleton, MovieCard, NoResults } from "@/components";
import type { MovieTrending } from "@/@types/trendings";

export function SearchPage() {
  const [params] = useSearchParams();
  const query = params.get("query") ?? "";

  const { data, isLoading, error } = useSearchMovie(query);

  const movies = data?.data?.results ?? [];

  return (
    <div className="px-10 py-6">
      <h1 className="text-xl font-semibold mb-4">
        Resultados para: <span className="text-primary-200">{query}</span>
      </h1>

      {((!isLoading && movies.length === 0) || error) && <NoResults />}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-16">
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <CardSkeleton key={index} className="aspect-video" />
          ))}
        {movies?.map((movie: MovieTrending) => (
          <MovieCard
            key={`${movie.id} - ${movie.title}`}
            movie={movie}
            className="aspect-video"
          />
        ))}
      </div>
    </div>
  );
}
