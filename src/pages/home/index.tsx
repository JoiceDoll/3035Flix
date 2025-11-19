import type { ITrendings } from "../../@types/trendings";
import { Header } from "../../components";
import { MovieCard } from "../../components/shared/movie_card";
import { useShops } from "../../services/queries/posts.query";
import { TrendingBanner } from "../../components/modules";

export function Home() {
  const { data } = useShops();
  const movies = data?.data.results as ITrendings[];
  const highRated = movies?.filter((movie) => movie?.vote_average > 6);

  console.log("MOVIES", movies);

  return (
    <div className="px-18">
      <Header />
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
