import App from "../App";

import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../containers/AuthPage/AuthPage";
import DashbordPage from "../containers/DashbordPage/DashbordPage";
import LoginPage from "../containers/LoginPage/LoginPage";
import RegistrationPage from "../containers/RegistrationPage/RegistrationPage";

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
    path: "auth/login",
    element: <LoginPage />,
  },
  {
    path: "auth/registration",
    element: <RegistrationPage />,
  },
  {
    path: "auth",
    element: <AuthPage />,
  },
  {
    path: "dashbord",
    element: <DashbordPage />,
  },
];

export const router = createBrowserRouter(routes);
