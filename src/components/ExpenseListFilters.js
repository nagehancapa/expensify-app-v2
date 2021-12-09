import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../store/filters/selectors";
import { setTextFilter } from "../store/filters/actions";
import { sortByDate, sortByAmount } from "../store/filters/actions";

const ExpenseListFilters = (props) => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        value={filters.text}
        onChange={(e) => dispatch(setTextFilter(e.target.value))}
      />
      <select
        value={filters.sortBy}
        onChange={(e) => {
          if (e.target.value === "date") {
            return dispatch(sortByDate());
          } else if (e.target.value === "amount") {
            return dispatch(sortByAmount());
          }
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

export default ExpenseListFilters;
