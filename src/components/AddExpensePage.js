import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../store/expenses/actions";

const AddExpensePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(expense) {
    dispatch(startAddExpense(expense));
    navigate("/");
  }

  return (
    <div>
      <h1>Add Expense</h1>
      {/*<ExpenseForm
        onSubmit={(expense) => {
          dispatch(addExpense(expense));
          navigate("/");
        }}
      /> */}
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};

export default AddExpensePage;
