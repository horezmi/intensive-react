import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "../../firebase/config";

export interface ILoginUserData {
  email: string;
  password: string;
}

const createFb = () => {
  const instance = initializeApp(firebaseConfig);
  const auth = getAuth(instance);

  return {
    instance,
    signUp: ({ email, password }: ILoginUserData) =>
      createUserWithEmailAndPassword(auth, email, password),
    signIn: ({ email, password }: ILoginUserData) =>
      signInWithEmailAndPassword(auth, email, password),
  };
};

export const fbAPi = createFb();
