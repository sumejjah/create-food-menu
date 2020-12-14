import { Status } from "../../../utils/constants";

export const getMealsRequest = (state) => state.meals.status === Status.PENDING;
export const getMealsFail = (state) => state.meals.status === Status.FAIL;
export const getMealsSuccess = (state) => state.meals.data;