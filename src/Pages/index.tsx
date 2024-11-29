import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Auth } from "./Auth/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
