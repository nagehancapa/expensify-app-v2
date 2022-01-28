import { push, ref, set, get, remove, update } from "firebase/database";
import db from "../../firebase/firebase";

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().user.uid;
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
    const newRef = push(ref(db, `users/${uid}/expenses`));
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
  return (dispatch, getState) => {
    const uid = getState().user.uid;
    return remove(ref(db, `users/${uid}/expenses/${id}`))
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

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().user.uid;
    return update(ref(db, `users/${uid}/expenses/${id}`), updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      })
      .catch((e) => {
        console.log("Did not edit data.", e);
      });
  };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().user.uid;
    return get(ref(db, `users/${uid}/expenses`))
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
