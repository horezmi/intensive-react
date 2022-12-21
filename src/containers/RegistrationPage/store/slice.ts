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
    initApp: (_, action) => {
      console.log("initApp");
      return {
        user: action.payload,
      };
    },
  },
  extraReducers: {},
});

export const { initApp } = RegistrationSlice.actions;
export default RegistrationSlice.reducer;
