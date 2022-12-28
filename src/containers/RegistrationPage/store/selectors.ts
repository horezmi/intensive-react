import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

const selectSelf = (state: RootState) => state;
export const registrationPageSelector = createSelector(
  selectSelf,
  (state) => state.registrationPageReducer
);
