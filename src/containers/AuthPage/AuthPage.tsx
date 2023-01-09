import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks/redux";
import { ILoginUserData } from "../../services/fbApi";
import { useNavigate } from "react-router-dom";
import { loginPageSelector } from "./store/selectors";
import { useEffect } from "react";
import { lsApi } from "../../services/lsApi";
import AuthForm from "./components/AuthForm";
import { EAuthPageSagaActions } from "./store/saga";

const AuthPage = () => {
  const { pathname } = useLocation();
  const isRegistration = pathname.includes("registration");
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(loginPageSelector);
  const navigate = useNavigate();
  const token = lsApi.getToken();

  useEffect(() => {
    if (user.email) {
      navigate("/");
    }
  }, [user]);

  const handleSubmit = (event: ILoginUserData) => {
    if (isRegistration) {
      dispatch({
        type: EAuthPageSagaActions.SIGN_UP_SAGA,
        payload: event,
      });
    } else {
      dispatch({
        type: EAuthPageSagaActions.SIGN_IN_SAGA,
        payload: event,
      });
    }
  };

  if (token) {
    return <h1>Вы залогинены</h1>;
  }

  return (
    <>
      <div>
        <h1>{isRegistration ? "Registration" : "Login"} Page</h1>

        <AuthForm onSubmit={handleSubmit} isRegistration={isRegistration} />
      </div>
    </>
  );
};

export default AuthPage;
