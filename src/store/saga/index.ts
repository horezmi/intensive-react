import { all, fork } from "redux-saga/effects";
import authPageSaga from "../../containers/AuthPage/store/saga";

export default function* rootSaga() {
  yield all([fork(authPageSaga)]);
}
