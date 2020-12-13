import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as form } from "redux-form";

// import mealsReducer from '../components/Dashboard/redux/reducer';

export default (routerHistory) =>
  combineReducers({
    form,
    router: connectRouter(routerHistory),
    // mealsReducer
  });
