import { useParams } from "react-router-dom";

export function MovieDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalhes do Filme</h1>
      <p>ID atual: {id}</p>
    </div>
  );
}
