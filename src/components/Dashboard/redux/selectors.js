import { Status } from "../../../utils/constants";

export const getMealsRequest = (state) => state.meals.meals.status === Status.PENDING;
export const getMealsFail = (state) =>
  state.meals.meals.status === Status.FAIL && state.meals.meals.error;
export const getMealsSuccess = (state) => state.meals.meals.data;

export const downloadRequest = (state) =>
  state.meals.download.status === Status.PENDING;
export const downloadFail = (state) =>
  state.meals.download.status === Status.FAIL && state.meals.download.error;
export const downloadSuccess = (state) => state.meals.download.data;