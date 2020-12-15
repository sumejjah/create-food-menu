import { Status } from "../../../utils/constants";

export const getMealsRequest = (state) => state.meals.status === Status.PENDING;
export const getMealsFail = (state) =>
  state.meals.status === Status.FAIL && state.meals.error;
export const getMealsSuccess = (state) => state.meals.data;

export const downloadRequest = (state) => state.meals.status === Status.PENDING;
export const downloadFail = (state) =>
  state.meals.status === Status.FAIL && state.meals.error;
export const downloadSuccess = (state) => state.meals.data;