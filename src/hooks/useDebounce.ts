import { useRef } from "react";

export default function useDebounce(fn: any, delay: number) {
  const timeoutRef = useRef<number | null>(null);

  function debouncedFn(...args: Parameters<any>): void {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debouncedFn;
}
