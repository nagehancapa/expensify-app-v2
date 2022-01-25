import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectExpenses } from "../store/expenses/selectors";
import ExpenseForm from "./ExpenseForm";
import {
  startEditExpense,
  startRemoveExpense,
} from "../store/expenses/actions";

const EditExpensePage = (props) => {
  const { id } = useParams();
  const expenses = useSelector(selectExpenses);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const expense = expenses.find((expense) => expense.id === id);

  function onSubmit(expense) {
    dispatch(startEditExpense(id, expense));
    navigate("/");
  }

  function onClick() {
    dispatch(startRemoveExpense({ id }));
    navigate("/");
  }

  return (
    <div>
      <ExpenseForm expense={expense} onSubmit={onSubmit} />
      <button onClick={onClick}>Remove</button>
    </div>
  );
};

export default EditExpensePage;
