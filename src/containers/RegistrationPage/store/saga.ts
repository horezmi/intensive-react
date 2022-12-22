import { put, takeEvery } from "redux-saga/effects";
import { initApp, initAppLoading } from "./slice";

export const registrationPageSagaActions = {
  INIT_APP_SAGA: "INIT_APP_SAGA",
};

export function* initAppSaga() {
  try {
    yield put(initAppLoading(true));
    const user = { name: "Peter" };
    const result = true;
    if (result) {
      yield put(initApp(user));
      yield put(initAppLoading(false));
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* registrationPageSaga() {
  yield takeEvery(registrationPageSagaActions.INIT_APP_SAGA, initAppSaga);
}
