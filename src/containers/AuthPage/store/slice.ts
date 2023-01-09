import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";

export interface AuthPageState {
  user: IUser;
  loading?: boolean;
  error?: string;
}

const initialState: AuthPageState = {
  user: { email: "", displayName: "", name: "", uid: "" },
  loading: false,
  error: "",
};

export const AuthPageSlice = createSlice({
  name: "AuthPage",
  initialState,
  reducers: {
    authLoading: (state, action) => {
      state.loading = action.payload;
    },
    auth: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { authLoading, auth } = AuthPageSlice.actions;
export default AuthPageSlice.reducer;
