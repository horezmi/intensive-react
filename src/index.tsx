import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider } from "react-redux";
import { sagaMiddleware, setupStore } from "./store";

import "./index.scss";
import saga from "./store/saga";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = setupStore();
sagaMiddleware.run(saga);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
