type CardSkeletonProps = {
  className?: string;
};

export const CardSkeleton: React.FC<CardSkeletonProps> = ({ className }) => (
  <div className="w-full rounded-lg overflow-hidden animate-pulse">
    <div
      className={`aspect-2/3 w-full bg-gray flex flex-col justify-end ${className}`}
    />
    <div className="mt-2 space-y-2">
      <div className="bg-gray h-6 max-w-[80%] rounded-md" />
      <div className="bg-gray h-6 max-w-[30%] rounded-md" />
    </div>
  </div>
);
