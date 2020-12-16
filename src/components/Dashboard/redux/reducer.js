import { combineReducers  } from "redux";

import meals from './reducers/mealsReducer';
import download from './reducers/downloadReducer';


const mealsReducer = combineReducers({
  meals,
  download
})

export default mealsReducer;
