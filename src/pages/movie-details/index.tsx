import { useParams } from "react-router-dom";
import { useShowMovie } from "../../services/queries/posts.query";
import { formatDate } from "../../utils";
import type { MovieDetails } from "../../@types/trendings";
import { Play, Clapperboard } from "lucide-react";

export function MovieDetails() {
  const { id } = useParams();
  const movie_id = Number(id);
  const { data } = useShowMovie(movie_id);
  const details = data?.data as MovieDetails;

  const date = details?.release_date;

  console.log(data?.data);

  return (
    <div className="absolute top-0 left-0 w-full">
      <div
        className="aspect-10/8 md:aspect-10/3 w-full bg-cover bg-center md:bg-top object-top flex flex-col justify-end z-10"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${details?.backdrop_path})`,
        }}
      >
        <div className="text-white bg-(image:--bg-banner-gradient) p-4 md:p-12 z-20 flex flex-col gap-2">
          <h2 className="md:text-4xl">{details?.title}</h2>
          <div className="flex items-center gap-2 text-xs md:text-lg">
            <span>⭐ {details?.vote_average.toFixed(1)} </span>
          </div>
          <a
            href={details?.homepage}
            className="mt-4 py-4 flex place-content-center gap-2 rounded-lg bg-white max-w-[150px]"
          >
            <Play color="black" />
            <span className="text-black">Assistir</span>
          </a>
        </div>
      </div>
      <div className="px-12 mt-8 flex flex-col gap-8">
        <div className="flex items-center text-xl gap-4 font-bold">
          <Clapperboard />
          <span>Detalhes</span>
        </div>
        <p className="text-md max-w-[800px]">{details?.overview}</p>

        <p>
          <span className="font-bold text-lg">Data de lançamento: </span>
          {date && formatDate(date)}{" "}
        </p>
      </div>
    </div>
  );
}
