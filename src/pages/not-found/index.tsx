import NotFoundImage from "@/assets/svg/not-found.svg";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="px-8 w-full h-screen flex flex-col justify-center items-center gap-4">
      <img
        src={NotFoundImage}
        loading="lazy"
        alt="Ilustração de erro 404 Not Found"
        className="size-[500px]"
      />
      <p className="lg:text-2xl text-center">Oops, página não encontrada!</p>
      <Button text="Voltar a Home" onClick={() => navigate("/")} />
    </div>
  );
}
