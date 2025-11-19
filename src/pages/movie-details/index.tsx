import { useParams } from "react-router-dom";
import { useShowMovie } from "../../services/queries/posts.query";

export function MovieDetails() {
  const { id } = useParams();
  const movie_id = Number(id);
  const { data } = useShowMovie(movie_id);
  const details = data?.data;

  console.log(data?.data);

  return (
    <div className="absolute top-0 left-0 w-full">
      <div
        className="aspect-10/3 w-full bg-cover object-top flex flex-col justify-end z-10"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${details?.backdrop_path})`,
        }}
      >
        <div className="text-white bg-(image:--bg-banner-gradient) p-12 z-20 flex flex-col gap-2">
          <h2 className="text-4xl">{details?.title}</h2>
          <div className="flex items-center gap-2 text-xs">
            <span>⭐ {details?.vote_average.toFixed(1)}</span>
            <span>{details?.release_date}</span>
          </div>
          <a href={details?.homepage}>Assistir</a>
        </div>
      </div>
      <div className="px-12 mt-8">
        <p className="text-md max-w-[800px]">{details?.overview}</p>
      </div>
    </div>
  );
}
