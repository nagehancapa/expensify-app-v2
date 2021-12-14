// Filters Reducer
const date = new Date();

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: new Date(date.getFullYear(), date.getMonth(), 1),
  endDate: new Date(date.getFullYear(), date.getMonth() + 1, 0),
};

export default function filtersReducer(
  state = filtersReducerDefaultState,
  action
) {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
}
