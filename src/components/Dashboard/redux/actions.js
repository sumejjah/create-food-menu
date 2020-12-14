import { createAction } from "redux-actions";

import { DOWNLOAD_RECIPE, GET_MEALS } from './constants';

import { getMealsByKeyword, downloadRecipe as downloadRecipeService } from '../services/mealsService';

const getMealsSuccess = createAction(`${GET_MEALS}_SUCCESS`);
const getMealsFail = createAction(`${GET_MEALS}_FAIL`);

export const getMeals = (keyword) => async(dispatch) => {
  const params = {
    q: keyword,
    pagesize: 30,
  };

  const data = await getMealsByKeyword(params);

  dispatch(getMealsSuccess({data}));
}

const downloadSuccess = createAction(`${DOWNLOAD_RECIPE}_SUCCESS`);
const downloadFail = createAction(`${DOWNLOAD_RECIPE}_FAIL`);

export const downloadRecipe = (params) => async (dispatch) => {
  const result = await downloadRecipeService(params);

  dispatch(downloadSuccess({ result }));
} 