import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import authPageReducer from "../containers/AuthPage/store/slice";

import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

const rootReducer = combineReducers({
  authPageReducer,
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
