import type { ITrendings } from "../../@types/trendings";
import { MovieCard, TrendingBanner } from "../../components";
import { useFindTrendings } from "../../services/queries/posts.query";

export function Home() {
  const { data } = useFindTrendings();
  const movies = data?.data.results as ITrendings[];
  const highRated = movies?.filter((movie) => movie?.vote_average > 6);

  console.log("MOVIES", movies);

  return (
    <div className="px-18">
      <section>
        <h1 className="text-2xl mb-10">Os maiores sucessos</h1>
        {highRated && <TrendingBanner highRatedMovies={highRated} />}
      </section>

      <section
        className="
        py-24
      grid 
      gap-6 
      grid-cols-2 
      sm:grid-cols-3 
      md:grid-cols-4 
      lg:grid-cols-6 
      xl:grid-cols-7
    "
      >
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
