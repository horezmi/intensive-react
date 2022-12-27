import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import registrationPageReducer from "../containers/RegistrationPage/store/slice";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

const rootReducer = combineReducers({
  registrationPageReducer,
});

export const sagaMiddleware = createSagaMiddleware();

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

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
