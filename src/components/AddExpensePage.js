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
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default AddExpensePage;
