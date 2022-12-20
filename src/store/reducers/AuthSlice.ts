import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface AuthState {
  user: IUser;
  loading?: boolean;
  error?: string;
}

const initialState: AuthState = {
  user: {},
  loading: false,
  error: "",
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initApp: (_, action) => {
      console.log("initApp");
      return {
        user: action.payload,
      };
    },
  },
  extraReducers: {},
});

export const { initApp } = AuthSlice.actions;
export default AuthSlice.reducer;
