import React from "react";
import { useDispatch } from "react-redux";
import { removeExpense } from "../store/expenses/actions";

// destructured props object
const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{description}</h3>
      <p>
        {amount} - {createdAt}
      </p>
      <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button>
    </div>
  );
};

export default ExpenseListItem;
