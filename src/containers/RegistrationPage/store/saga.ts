import { call, put, takeEvery } from "redux-saga/effects";
import { fbAPi, ILoginUserData } from "../../../services/fbApi";
import { signUp, signUpLoading } from "./slice";

export enum ERegistrationPageSagaActions {
  SIGN_UP_SAGA = "SIGN_UP_SAGA",
  SIGN_IN_SAGA = "SIGN_UP_SAGA",
}

interface ISignUpSagaAction {
  type: ERegistrationPageSagaActions.SIGN_UP_SAGA;
  payload: ILoginUserData;
}

export function* signUpSaga(action: ISignUpSagaAction) {
  try {
    yield put(signUpLoading(true));

    yield call(fbAPi.signUp, action.payload);

    yield put(signUp(action.payload));
    yield put(signUpLoading(false));
  } catch (e) {
    console.log(e);
  }
}

export default function* registrationPageSaga() {
  yield takeEvery(ERegistrationPageSagaActions.SIGN_UP_SAGA, signUpSaga);
}
