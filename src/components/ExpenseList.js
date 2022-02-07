import React from "react";
import { useSelector } from "react-redux";
import { selectVisibleExpenses } from "../store/expenses/selectors";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = (props) => {
  const expenses = useSelector(selectVisibleExpenses);

  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {!expenses.length ? (
          <div className="list-item list-item--message">
            <span>No expenses</span>
          </div>
        ) : (
          expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
