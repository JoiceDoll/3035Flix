import { useSearchParams } from "react-router-dom";
import { useSearchMovie } from "../../services/queries/posts.query";
import { MovieCard } from "../../components";
import type { MovieTrending } from "../../@types/trendings";

export function SearchPage() {
  const [params] = useSearchParams();
  const query = params.get("query") ?? "";

  const { data, isLoading, error } = useSearchMovie(query);

  const movies = data?.data?.results ?? [];

  return (
    <div className="px-10 py-6">
      <h1 className="text-xl font-semibold mb-4">
        Resultados para: <span className="text-violet-500">{query}</span>
      </h1>

      {isLoading && <p>Carregando...</p>}
      {error && <p>Erro ao buscar filmes</p>}

      {/* SEM RESULTADOS */}
      {!isLoading && movies.length === 0 && (
        <p className="text-gray-400">Nenhum resultado encontrado.</p>
      )}

      {/* LISTAGEM */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-16">
        {movies?.map((movie: MovieTrending) => (
          <MovieCard key={movie.id} movie={movie} className="aspect-video"/>
        ))}
      </div>
    </div>
  );
}
