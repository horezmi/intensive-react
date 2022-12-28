import { lsApi } from "../../services/lsApi";
import DashbordPage from "../DashbordPage/DashbordPage";
import AuthPage from "../AuthPage/AuthPage";

const HomePage = () => {
  const token = lsApi.getToken();

  if (!token) {
    return <AuthPage />;
  }

  return <DashbordPage />;
};

export default HomePage;
