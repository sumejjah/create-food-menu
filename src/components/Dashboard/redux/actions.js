import { createAction } from "redux-actions";

import { DOWNLOAD_RECIPE, GET_MEALS } from './constants';

import { getMealsByKeyword, downloadRecipe as downloadRecipeService } from '../services/mealsService';

const getMealsSuccess = createAction(`${GET_MEALS}_SUCCESS`);
const getMealsFail = createAction(`${GET_MEALS}_FAIL`);

export const getMeals = (keyword) => async(dispatch) => {
  try {
    const params = {
      q: keyword,
      pagesize: 30,
    };

    const data = await getMealsByKeyword(params);

    dispatch(getMealsSuccess({ data }));
  } catch (error) {
    dispatch(getMealsFail(error.response && error.response.data));
  }
}

const downloadSuccess = createAction(`${DOWNLOAD_RECIPE}_SUCCESS`);
const downloadFail = createAction(`${DOWNLOAD_RECIPE}_FAIL`);

export const downloadRecipe = (params) => async (dispatch) => {
  try {
    const result = await downloadRecipeService(params);

    dispatch(downloadSuccess({ result }));

    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(result.data, null, 2)], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "recipe.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  } catch (error) {
    dispatch(downloadFail(error.message))
  }
} 