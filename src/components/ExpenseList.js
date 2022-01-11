import React from "react";
import { useSelector } from "react-redux";
import { selectVisibleExpenses } from "../store/expenses/selectors";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = (props) => {
  const expenses = useSelector(selectVisibleExpenses);

  return (
    <div>
      {!expenses.length ? (
        <p>No expenses</p>
      ) : (
        expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense} />;
        })
      )}
    </div>
  );
};

export default ExpenseList;
