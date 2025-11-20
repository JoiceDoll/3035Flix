import NoMoviesFounded from "@/assets/svg/no-movies-found.svg";

export const NoResults = () => (
  <div className="w-full h-full md:mt-16 flex flex-col justify-center items-center gap-4">
    <img
      src={NoMoviesFounded}
      loading="lazy"
      alt="Ilustração de"
      className="size-[500px]"
    />
    <p className="text-md lg:text-2xl text-center">
      Nenhum resultado encontrado.
    </p>
  </div>
);
