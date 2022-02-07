import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";
import numeral from "numeral";
import "numeral/locales/nl-nl";
import {
  selectVisibleExpenses,
  selectTotalExpense,
} from "../store/expenses/selectors";

const ExpensesSummary = () => {
  const visibleExpenses = useSelector(selectVisibleExpenses);
  const totalExpense = useSelector(selectTotalExpense);
  numeral.locale("nl-nl");
  const expenseWord = visibleExpenses.length === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(totalExpense / 100).format("$0,0.00");

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{visibleExpenses.length}</span> {expenseWord} totaling{" "}
          <span>{formattedExpensesTotal}</span>
        </h1>
        <div className="page-header__actions">
          <BrowserRouter>
            <Link className="button" to="/create">
              Add Expense
            </Link>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default ExpensesSummary;
