import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, MovieDetails, SearchPage, NotFound } from "@/pages";
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
    element: <NotFound />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
