import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../../models/IUser";

interface RegistrationState {
  user: IUser;
  loading?: boolean;
  error?: string;
}

const initialState: RegistrationState = {
  user: {},
  loading: false,
  error: "",
};

export const RegistrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    initAppLoading: (state, action) => {
      state.loading = action.payload;
    },
    initApp: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { initApp, initAppLoading } = RegistrationSlice.actions;
export default RegistrationSlice.reducer;
