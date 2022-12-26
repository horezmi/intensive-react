import { createSlice } from "@reduxjs/toolkit";
import { ILoginUserData } from "../../../services/fbApi";
// import { IUser } from "../../../models/IUser";

export interface RegistrationPageState {
  user: ILoginUserData;
  loading?: boolean;
  error?: string;
}

const initialState: RegistrationPageState = {
  user: { email: "", password: "" },
  loading: false,
  error: "",
};

export const RegistrationPageSlice = createSlice({
  name: "RegistrationPage",
  initialState,
  reducers: {
    signUpLoading: (state, action) => {
      state.loading = action.payload;
    },
    signUp: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { signUp, signUpLoading } = RegistrationPageSlice.actions;
export default RegistrationPageSlice.reducer;
