import { combineReducers } from "redux";
import expenses from "./expenses/reducer";
import filters from "./filters/reducer";

export default combineReducers({
  expenses,
  filters,
});
