import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, MovieDetails, SearchPage } from "../pages";
import { Header } from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/movie/:id",
    element: (
      <>
        <Header />
        <MovieDetails />
      </>
    ),
  },
  {
    path: "/search",
    element: (
      <>
        <Header />
        <SearchPage />
      </>
    ),
  },
  {
    path: "*",
    element: <p>Not Found</p>,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
