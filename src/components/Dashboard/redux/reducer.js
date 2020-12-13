import { handleActions } from "redux-actions";

export const Status = {
  INIT: 0,
  PENDING: 1,
  DONE: 2,
  FAIL: 3,
};

export const initialState = {
  data: null,
  status: Status.INIT,
  error: null,
};

export default (prefix, customActionHandlers = {}) =>
  handleActions(
    {
      [`${prefix}_REQUEST`]: (state) => ({
        ...state,
        data: null,
        status: Status.PENDING,
        error: null,
      }),
      [`${prefix}_FAIL`]: (state, action) => ({
        ...state,
        data: null,
        status: Status.FAIL,
        error: action.payload,
      }),
      [`${prefix}_SUCCESS`]: (state, action) => ({
        ...state,
        data: action.payload.data,
        status: Status.DONE,
        error: null,
      }),
      [`${prefix}_INIT`]: (state) => ({
        ...state,
        data: null,
        status: Status.INIT,
        error: null,
      }),
      ...customActionHandlers,
    },
    initialState
  );
