import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

export default function configureStore(initialState = {}, history) {
  const composeEnhancers =
    (process.env.NODE_ENV === "development" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  return createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
  );
}
