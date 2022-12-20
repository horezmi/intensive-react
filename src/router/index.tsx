import App from "../App";

import { createBrowserRouter, Outlet } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import AdminPage from "../pages/AdminPage/AdminPage";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "auth",
    element: <AuthPage />,
  },
  {
    path: "admin",
    element: <AdminPage />,
  },
];

export const router = createBrowserRouter(routes);
