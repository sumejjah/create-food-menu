import { handleActions } from "redux-actions";
import { Status } from "../../../../utils/constants";

export const initialState = {
  data: null,
  status: Status.INIT,
  error: null,
};

const mealsReducer = handleActions(
  {
    [`DOWNLOAD_RECIPE_REQUEST`]: (state) => ({
      ...state,
      data: null,
      status: Status.PENDING,
      error: null,
    }),
    [`DOWNLOAD_RECIPE_FAIL`]: (state, action) => ({
      ...state,
      data: null,
      status: Status.FAIL,
      error: action.payload,
    }),
    [`DOWNLOAD_RECIPE_SUCCESS`]: (state, action) => ({
      ...state,
      data: action.payload.data,
      status: Status.DONE,
      error: null,
    }),
  },
  initialState
);

export default mealsReducer;
