import { push, ref, set } from "firebase/database";
import db from "../../firebase/firebase";

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = {
      description,
      note,
      amount,
      createdAt,
    };
    const newRef = push(ref(db, "expenses"));
    return set(newRef, expense)
      .then(() => {
        // dispatch to change redux store
        dispatch(
          addExpense({
            id: newRef.key,
            ...expense,
          })
        );
      })
      .catch((e) => {
        console.log("This failed.", e);
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});
