import { call, put, takeEvery } from "redux-saga/effects";
import { fbAPi, ILoginUserData } from "../../../services/fbApi";
import { signUp, signUpLoading } from "./slice";
import { lsApi } from "../../../services/lsApi";
import { UserCredential } from "firebase/auth";

export enum ERegistrationPageSagaActions {
  SIGN_UP_SAGA = "SIGN_UP_SAGA",
  SIGN_IN_SAGA = "SIGN_UP_SAGA",
}

interface ISignUpSagaAction {
  type: ERegistrationPageSagaActions.SIGN_UP_SAGA;
  payload: ILoginUserData;
}

type IUserCredential = UserCredential & {
  user: {
    accessToken: string;
  };
};

export function* signUpSaga(action: ISignUpSagaAction) {
  try {
    yield put(signUpLoading(true));
    const { user }: IUserCredential = yield call(fbAPi.signUp, action.payload);
    lsApi.setToken(user.accessToken);
    yield put(
      signUp({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
        name: "TestUser",
      })
    );
    yield put(signUpLoading(false));
  } catch (e) {
    console.log(e);
  }
}

export default function* registrationPageSaga() {
  yield takeEvery(ERegistrationPageSagaActions.SIGN_UP_SAGA, signUpSaga);
}
