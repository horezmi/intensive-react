import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import registrationReducer from "../containers/RegistrationPage/store/slice";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import saga from "./saga";

const rootReducer = combineReducers({
  registrationReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware,
  logger,
];

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware,
  });
};

export default setupStore();

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
