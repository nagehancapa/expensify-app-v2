import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectExpenses } from "../store/expenses/selectors";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../store/expenses/actions";

const EditExpensePage = (props) => {
  const { id } = useParams();
  const expenses = useSelector(selectExpenses);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const expense = expenses.find((expense) => expense.id === id);

  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={(expense) => {
          dispatch(editExpense(id, expense));
          navigate("/");
        }}
      />
      <button
        onClick={() => {
          dispatch(removeExpense({ id }));
          navigate("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default EditExpensePage;
