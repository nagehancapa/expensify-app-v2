import { combineReducers } from "redux";
import expenses from "./expenses/reducer";
import filters from "./filters/reducer";
import user from "./user/reducer";

export default combineReducers({
  expenses,
  filters,
  user,
});
