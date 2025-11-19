import { SwiperSlide } from "swiper/react";
import { Swipper } from "../../../../libs/swipper";
import type { MovieTrending } from "../../../../@types/trendings";

export type TrendingBannerProps = {
  highRatedMovies: MovieTrending[];
};

export const TrendingBanner: React.FC<TrendingBannerProps> = ({
  highRatedMovies,
}) => (
  <Swipper>
    {highRatedMovies.map((movie) => (
      <SwiperSlide key={movie.id} className="w-full">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          className="aspect-10/4 object-cover w-full rounded-lg object-top bg-(image:--bg-banner-gradient)"
          loading="lazy"
        />
      </SwiperSlide>
    ))}
  </Swipper>
);
