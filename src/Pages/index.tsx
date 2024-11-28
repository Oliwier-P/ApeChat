import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Login } from "./Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
