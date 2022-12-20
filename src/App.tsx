import "./App.scss";
import { NavLink } from "react-router-dom";

const App = () => {
  console.log("app");
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/auth">auth</NavLink>
          </li>
          <li>
            <NavLink to="/admin">admin</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
