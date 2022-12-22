import { all, fork } from "redux-saga/effects";
import registrationPageSaga from "../../containers/RegistrationPage/store/saga";

export default function* rootSaga() {
  yield all([fork(registrationPageSaga)]);
}
