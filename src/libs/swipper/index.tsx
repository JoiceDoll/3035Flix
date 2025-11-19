import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import type { ReactNode } from "react";

type SwipperProps = {
  children: ReactNode;
};
export function Swipper({ children }: SwipperProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 4000 }}
      slidesPerView={1}
      loop
      preventClicks={false}
      preventClicksPropagation={false}
      simulateTouch={true}
      noSwiping={false}
      className="w-full h-full"
    >
      {children}
    </Swiper>
  );
}
