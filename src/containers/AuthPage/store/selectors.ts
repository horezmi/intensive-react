import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

const selectSelf = (state: RootState) => state;
export const loginPageSelector = createSelector(
  selectSelf,
  (state) => state.authPageReducer
);
