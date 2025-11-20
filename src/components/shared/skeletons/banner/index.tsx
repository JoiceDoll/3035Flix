type BannerSkeletonProps = {
  className?: string;
};

export const BannerSkeleton: React.FC<BannerSkeletonProps> = ({
  className,
}) => (
  <div
    className={`aspect-10/8 sm:aspect-10/6 md:aspect-10/3 w-full bg-gray animate-pulse rounded-lg ${className}`}
  />
);
