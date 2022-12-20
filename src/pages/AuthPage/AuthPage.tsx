import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks/redux";
import { sagaActions } from "../../store/saga/sagaActions";

const AuthPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("useEffect");
    dispatch({ type: sagaActions.INIT_APP_SAGA });
  }, []);
  return (
    <div>
      <h1>Auth Page</h1>
    </div>
  );
};

export default AuthPage;
