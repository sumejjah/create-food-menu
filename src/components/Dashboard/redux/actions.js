import { createAction } from "redux-actions";

import { DOWNLOAD_RECIPE, GET_MEALS } from './constants';

import { getMealsByKeyword, downloadRecipe as downloadRecipeService } from '../services/mealsService';

const getMealsRequest = createAction(`${GET_MEALS}_REQUEST`);
const getMealsSuccess = createAction(`${GET_MEALS}_SUCCESS`);
const getMealsFail = createAction(`${GET_MEALS}_FAIL`);

export const getMeals = (params) => async(dispatch) => {
  dispatch(getMealsRequest());
  try {
    const data = await getMealsByKeyword(params);

    dispatch(getMealsSuccess({ data }));
  } catch (error) {
    dispatch(getMealsFail(error.response && error.response.data));
  }
}

const downloadLocal = (data) => {
  const element = document.createElement("a");
  const file = new Blob([JSON.stringify(data, null, 2)], {
    type: "text/plain",
  });
  element.href = URL.createObjectURL(file);
  element.download = data.name || "recipe.txt";
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
}

const downloadSuccess = createAction(`${DOWNLOAD_RECIPE}_SUCCESS`);
const downloadFail = createAction(`${DOWNLOAD_RECIPE}_FAIL`);

export const downloadRecipe = (params) => async (dispatch) => {
  try {
    const result = await downloadRecipeService(params);

    dispatch(downloadSuccess({ result }));

    downloadLocal(result.data);
  } catch (error) {
    dispatch(downloadFail(error.message))
  }
} 