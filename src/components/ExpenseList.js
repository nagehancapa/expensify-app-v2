import React from "react";
import { useSelector } from "react-redux";
import { visibleExpenses } from "../store/expenses/selectors";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = (props) => {
  const expenses = useSelector(visibleExpenses);

  return (
    <div>
      <h1>Expense List</h1>
      {expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })}
    </div>
  );
};

export default ExpenseList;
