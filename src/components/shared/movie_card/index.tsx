import type { MovieTrending } from "../../../@types/trendings";
import { useNavigate } from "react-router-dom";

type MovieCardProps = {
  movie: MovieTrending;
  className?: string;
};

export const MovieCard = ({ movie, className }: MovieCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full rounded-lg overflow-hidden bg-neutral-900 shadow-md cursor-pointer transition hover:scale-[1.03] "
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <div
        className={`aspect-2/3 w-full bg-gray-800 bg-cover bg-center flex flex-col justify-end ${className}`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        }}
      >
        <div className="bg-(image:--bg-banner-gradient) p-2">
          <span className="text-xs text-white">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="p-2">
        <h3 className="text-sm font-semibold truncate text-white">
          {movie.title}
        </h3>

        <span className="text-xs text-white/60">{movie.release_date}</span>
      </div>
    </div>
  );
};
