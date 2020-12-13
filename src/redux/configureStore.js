/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
// import config from "../config";
import rootReducer from "./rootReducer";

export default function configureStore(initialState = {}, history) {
  const composeEnhancers =
    (process.NODE_ENV === "development" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  return createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
  );
}
