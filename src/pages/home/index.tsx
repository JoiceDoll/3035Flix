import type { ITrendings } from "../../@types/trendings";
import { MovieCard, TrendingBanner } from "../../components";
import { useFindTrendings } from "../../services/queries/posts.query";

export function Home() {
  const { data } = useFindTrendings();
  const movies = data?.data.results as ITrendings[];
  const sortedMovies = movies
    ? [...movies].sort((a, b) => b.vote_average - a.vote_average)
    : [];
  const highRated = movies?.filter((movie) => movie?.vote_average > 6);

  return (
    <div className="mt-12 px-8 md:px-18">
      <section className="flex gap-3 flex-col">
        <h1 className="text-lg md:text-2xl mb-10">Top filmes da semana</h1>
        {highRated && <TrendingBanner highRatedMovies={highRated} />}
      </section>

      <section className="py-8 md:py-24 grid gap-6 grid-cols-[repeat(auto-fill,minmax(120px,1fr))] md:grid-cols-6">
        {sortedMovies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
