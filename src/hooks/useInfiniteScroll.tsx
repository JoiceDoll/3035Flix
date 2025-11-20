import { useEffect } from "react";
import type { RefObject } from "react";

type UseInfiniteScrollProps = {
  ref: RefObject<HTMLElement>;
  enabled?: boolean;
  onLoadMore: () => void;
  isFetchingNextPage?: boolean;
  hasNextPage?: boolean;
};
export function useInfiniteScroll({
  ref,
  enabled = true,
  onLoadMore,
  isFetchingNextPage,
  hasNextPage,
}: UseInfiniteScrollProps) {
  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetchingNextPage && hasNextPage) {
          onLoadMore();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, enabled, onLoadMore, isFetchingNextPage, hasNextPage]);
}
