import { lsApi } from "../../services/lsApi";
import DashbordPage from "../DashbordPage/DashbordPage";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const token = lsApi.getToken();

  if (!token) {
    return <Navigate to="/auth/login" />;
  }

  return <DashbordPage />;
};

export default HomePage;
