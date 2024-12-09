import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Auth } from "./Auth/Auth";
import { Chat } from "./Chats/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/chats",
    element: <Chat />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
