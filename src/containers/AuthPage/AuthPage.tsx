import { NavLink } from "react-router-dom";

const AuthPage = () => {
  return (
    <div>
      <h1>Auth Page</h1>
      <br />
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/auth/login">login</NavLink>
            </li>
            <li>
              <NavLink to="/auth/registration">registration</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AuthPage;
