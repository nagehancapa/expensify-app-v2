import { push, ref, set, get, remove } from "firebase/database";
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

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return remove(ref(db, `expenses/${id}`))
      .then(() => {
        dispatch(removeExpense({ id }));
      })
      .catch((e) => {
        console.log("Did not remove data.", e);
      });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return get(ref(db, "expenses"))
      .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExpenses(expenses));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
