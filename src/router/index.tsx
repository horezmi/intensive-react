import App from "../App";

import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../containers/AuthPage/AuthPage";
import AdminPage from "../containers/AdminPage/AdminPage";
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
    path: "admin",
    element: <AdminPage />,
  },
];

export const router = createBrowserRouter(routes);
