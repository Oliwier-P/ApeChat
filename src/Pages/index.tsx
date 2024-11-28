import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
