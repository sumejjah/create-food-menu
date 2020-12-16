import { handleActions } from "redux-actions";
import { Status } from "../../../../utils/constants";

export const initialState = {
  data: null,
  status: Status.INIT,
  error: null,
};

const mealsReducer = handleActions(
  {
    [`GET_MEALS_REQUEST`]: (state) => ({
      ...state,
      data: null,
      status: Status.PENDING,
      error: null,
    }),
    [`GET_MEALS_FAIL`]: (state, action) => ({
      ...state,
      data: null,
      status: Status.FAIL,
      error: action.payload,
    }),
    [`GET_MEALS_SUCCESS`]: (state, action) => ({
      ...state,
      data: action.payload.data,
      status: Status.DONE,
      error: null,
    }),
    [`GET_MEALS_INIT`]: (state) => ({
      ...state,
      data: null,
      status: Status.INIT,
      error: null,
    })
  },
  initialState
);

export default mealsReducer;
