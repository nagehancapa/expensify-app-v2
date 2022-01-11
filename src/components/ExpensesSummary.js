import React from "react";
import { useSelector } from "react-redux";
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
    <div>
      <h1>
        Viewing {visibleExpenses.length} {expenseWord} totaling{" "}
        {formattedExpensesTotal}
      </h1>
    </div>
  );
};

export default ExpensesSummary;
