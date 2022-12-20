import { takeEvery, put } from "redux-saga/effects";
import { initApp } from "../reducers/AuthSlice";

import { sagaActions } from "./sagaActions";

export function* initAppSaga() {
  try {
    const user = { name: "Peter" };
    console.log("initAppSaga");
    yield put(initApp(user));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.INIT_APP_SAGA, initAppSaga);
}
