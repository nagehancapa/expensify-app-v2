import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../store/filters/selectors";
import { setTextFilter } from "../store/filters/actions";

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
    </div>
  );
};

export default ExpenseListFilters;
