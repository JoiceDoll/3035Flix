import { SwiperSlide } from "swiper/react";
import { Swipper } from "@/libs/swipper";
import type { MovieTrending } from "@/@types/trendings";
import { ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

export type TrendingBannerProps = {
  highRatedMovies: MovieTrending[];
};

export const TrendingBanner: React.FC<TrendingBannerProps> = ({
  highRatedMovies,
}) => (
  <Swipper>
    {highRatedMovies.map(({ id, title, vote_average, backdrop_path }) => (
      <SwiperSlide key={id} className="w-full">
        <Link to={`/movie/${id}`}>
          <div
            className="aspect-10/8 sm:aspect-10/6 md:aspect-10/3 w-full bg-cover object-top flex flex-col justify-end rounded-lg"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
            }}
          >
            <div className="text-white bg-(image:--bg-banner-gradient) p-4 md:p-8 z-20 flex flex-col gap-2">
              <h2 className="text-lg md:text-4xl">{title}</h2>
              <div className=" flex items-center gap-2">
                <span className="bg-primary-400 text-white px-6 py-2 text-center rounded-md max-w-[150px] text-sm md:text-lg">
                  Quem viu amou!
                </span>
                <div className="flex items-center gap-2 text-lg md:text-xl">
                  <ThumbsUp size={20} />
                  <span>{vote_average.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    ))}
  </Swipper>
);
