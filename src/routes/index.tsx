import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages";

const router = createBrowserRouter([
  // {
  //   path: "/login",
  //   element: <SignUp />,
  // },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <p>Not Found</p>,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
