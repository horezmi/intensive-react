import App from "../App";

import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../containers/AuthPage/AuthPage";
import DashbordPage from "../containers/DashbordPage/DashbordPage";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "auth/login",
    element: <AuthPage />,
  },
  {
    path: "auth/registration",
    element: <AuthPage />,
  },
  {
    path: "dashbord",
    element: <DashbordPage />,
  },
];

export const router = createBrowserRouter(routes);
