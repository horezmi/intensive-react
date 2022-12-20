import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthSlice";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import saga from "./saga";

const rootReducer = combineReducers({
  authReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware, logger),
  });
};

export default setupStore();

sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
