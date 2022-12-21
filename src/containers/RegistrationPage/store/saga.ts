import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { initApp } from "./slice";

export function* initAppSaga() {
  try {
    const user = { name: "Peter" };
    console.log("initAppSaga");
    yield put(initApp(user));
  } catch (e) {
    console.log(e);
  }
}

export default function* registrationPageSaga() {
  yield takeEvery(initApp.type, initAppSaga);
}
