import { call, put, takeLatest } from "redux-saga/effects";
import { fbAPi, ILoginUserData } from "../../../services/fbApi";
import { authLoading, auth } from "./slice";
import { lsApi } from "../../../services/lsApi";
import { UserCredential } from "firebase/auth";

export enum EAuthPageSagaActions {
  SIGN_IN_SAGA = "SIGN_IN_SAGA",
  SIGN_UP_SAGA = "SIGN_UP_SAGA",
}

interface IAuthSagaAction {
  type: EAuthPageSagaActions.SIGN_IN_SAGA | EAuthPageSagaActions.SIGN_UP_SAGA;
  payload: ILoginUserData;
}

type IUserCredential = UserCredential & {
  user: {
    accessToken: string;
  };
};

export function* authSaga(action: IAuthSagaAction) {
  try {
    yield put(authLoading(true));

    const { user }: IUserCredential = yield call(
      action.type === EAuthPageSagaActions.SIGN_UP_SAGA
        ? fbAPi.signUp
        : fbAPi.signIn,
      action.payload
    );
    lsApi.setToken(user.accessToken);

    /** TODO generate name or add name to firebase */
    yield put(
      auth({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
        name: "TestUser",
      })
    );
  } catch (e) {
    console.log(e);
  } finally {
    yield put(authLoading(false));
  }
}

export default function* authPageSaga() {
  yield takeLatest(EAuthPageSagaActions.SIGN_IN_SAGA, authSaga);
  yield takeLatest(EAuthPageSagaActions.SIGN_UP_SAGA, authSaga);
}
