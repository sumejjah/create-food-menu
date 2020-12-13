import { createAction } from "redux-actions";
import axios from 'axios';

import { GET_MEALS } from './constants';

import { getMealsByKeyword } from '../services/foodSearchService';

const getMealsSuccess = createAction(`${GET_MEALS}_SUCCESS`);
const getMealsFail = createAction(`${GET_MEALS}_FAIL`);

export const getMeals = (keyword) => async(dispatch) => {
  const params = {
    dataType: ["Survey (FNDDS)"],
    // dataType: ["Foundation"],
    q: keyword,
    pagesize: 30,
  };

  const response = await getMealsByKeyword(params);

  dispatch(getMealsSuccess({response}));
}