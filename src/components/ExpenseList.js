import React from "react";
import { useSelector } from "react-redux";
import { selectExpenses } from "../store/expenses/selectors";
import { selectFilters } from "../store/filters/selectors";

const ExpenseList = (props) => {
  const expenses = useSelector(selectExpenses);
  const filters = useSelector(selectFilters);
  return (
    <div>
      <h1>Expense List</h1>
      {filters.text}
      {expenses.length}
    </div>
  );
};

export default ExpenseList;
