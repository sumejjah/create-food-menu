import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as form } from "redux-form";

import mealsReducer from '../components/Dashboard/redux/reducer';

const rootReducer = (routerHistory) =>
  combineReducers({
    form,
    router: connectRouter(routerHistory),
    meals: mealsReducer
  });

export default rootReducer;