import { combineReducers } from "redux";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  //   tasks: taskReducer,
  products: productReducer,
});

export default rootReducer;
