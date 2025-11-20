import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, MovieDetails, SearchPage, NotFound } from "@/pages";
import { Layout } from "@/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/movie/:id", element: <MovieDetails /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
