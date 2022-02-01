import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { selectFilters } from "../store/filters/selectors";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../store/filters/actions";

const ExpenseListFilters = (props) => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  const [dates, setDates] = useState([filters.startDate, filters.endDate]);

  function onTextChange(e) {
    dispatch(setTextFilter(e.target.value));
  }

  function onSortChange(e) {
    if (e.target.value === "date") {
      return dispatch(sortByDate());
    } else if (e.target.value === "amount") {
      return dispatch(sortByAmount());
    }
  }

  function onDateChange(e) {
    if (e === null) {
      setDates(null);
      dispatch(setStartDate(null));
      dispatch(setEndDate(null));
    } else {
      setDates([e[0], e[1]]);
      dispatch(setStartDate(e[0]));
      dispatch(setEndDate(e[1]));
    }
  }

  return (
    <div className="content-container">
      <div className="input-group">
        <div className="input-group__item">
          <input type="text" value={filters.text} onChange={onTextChange} />
        </div>
        <div className="input-group__item">
          <select value={filters.sortBy} onChange={onSortChange}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>
        <div className="input-group__item">
          <DateRangePicker value={dates} onChange={onDateChange} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseListFilters;
