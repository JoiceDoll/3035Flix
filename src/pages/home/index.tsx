import {
  BannerSkeleton,
  CardSkeleton,
  MovieCard,
  TrendingBanner,
} from "@/components";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useFindTrendings } from "@/services/queries/movies.query";
import { useRef, type RefObject } from "react";

export function Home() {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useFindTrendings();

  const movies = data?.pages.flatMap((page) => page.results) ?? [];

  const sortedMovies = movies.sort((a, b) => b.vote_average - a.vote_average)
  const highRated = movies?.filter((movie) => movie?.vote_average > 6);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useInfiniteScroll({
    ref: loadMoreRef as RefObject<HTMLElement>,
    enabled: hasNextPage,
    hasNextPage,
    isFetchingNextPage,
    onLoadMore: () => {
      if (!hasNextPage || isFetchingNextPage) return;
      fetchNextPage();
    },
  });

  return (
    <div className="mt-12 px-6 md:px-18">
      <section className="flex gap-3 flex-col">
        <h1 className="text-lg md:text-2xl mb-10">Top filmes da semana</h1>
        {isLoading ? (
          <BannerSkeleton />
        ) : (
          highRated && <TrendingBanner highRatedMovies={highRated} />
        )}
      </section>

      <section className="py-8 md:py-24 grid gap-6 grid-cols-[repeat(auto-fill,minmax(120px,1fr))] md:grid-cols-6">
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        {sortedMovies?.map((movie, index) => (
          <MovieCard key={`${movie.id} - ${index}`} movie={movie} />
        ))}
      </section>
      <div ref={loadMoreRef} style={{ height: 200 }} />
    </div>
  );
}
