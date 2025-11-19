import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, MovieDetails } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <p>Not Found</p>,
  },
  {
    path: "/movie/:id",
    element: <MovieDetails />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
