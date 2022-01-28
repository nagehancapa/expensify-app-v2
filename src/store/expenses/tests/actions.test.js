import configureStore from "redux-mock-store";
import ReduxThunk from "redux-thunk";
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense,
} from "../actions";
import expenses from "../../../fixtures/expenses";
import db from "../../../firebase/firebase";
import { ref, get, set } from "firebase/database";

describe("expenses store's actions' test", () => {
  const uid = "thisismytestuid";
  const defaultUserState = { user: { uid } };
  const middlewares = [ReduxThunk];
  const mockStore = configureStore(middlewares);

  beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
      expensesData[id] = { description, note, amount, createdAt };
    });
    set(ref(db, `users/${uid}/expenses`), expensesData).then(() => done());
  });

  test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({
      type: "REMOVE_EXPENSE",
      id: "123abc",
    });
  });

  test("should remove expense from firebase", (done) => {
    const store = mockStore(defaultUserState);
    const id = expenses[2].id;
    store
      .dispatch(startRemoveExpense({ id }))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: "REMOVE_EXPENSE",
          id,
        });
        return get(ref(db, `users/${uid}/expenses/${id}`));
      })
      .then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
      });
  });

  test("should setup edit expense action object", () => {
    const action = editExpense("123abc", { note: "New note value" });
    expect(action).toEqual({
      type: "EDIT_EXPENSE",
      id: "123abc",
      updates: { note: "New note value" },
    });
  });

  test("should edit expense from firebase", (done) => {
    const store = mockStore(defaultUserState);
    const id = expenses[0].id;
    const updates = { amount: 21045 };
    store
      .dispatch(startEditExpense(id, updates))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: "EDIT_EXPENSE",
          id,
          updates,
        });
        return get(ref(db, `users/${uid}/expenses/${id}`));
      })
      .then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount);
        done();
      });
  });

  test("should setup add expense action object with provided values", () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
      type: "ADD_EXPENSE",
      expense: expenses[2],
    });
  });

  test("should add expense to database and store", (done) => {
    const store = mockStore(defaultUserState);
    const expenseData = {
      description: "Mouse",
      amount: 3000,
      note: "This one is better",
      createdAt: 1000,
    };
    store
      .dispatch(startAddExpense(expenseData))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: "ADD_EXPENSE",
          expense: {
            id: expect.any(String),
            ...expenseData,
          },
        });

        return get(ref(db, `users/${uid}/expenses/${actions[0].expense.id}`));
      })
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
  });

  test("should add expense with defaults to database and store", (done) => {
    const store = mockStore(defaultUserState);
    const defaultExpense = {
      description: "",
      amount: 0,
      createdAt: 0,
      note: "",
    };
    store
      .dispatch(startAddExpense({}))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
          type: "ADD_EXPENSE",
          expense: {
            id: expect.any(String),
            ...defaultExpense,
          },
        });

        return get(ref(db, `users/${uid}/expenses/${actions[0].expense.id}`));
      })
      .then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultExpense);
        done();
      });
  });

  test("should setup set expense action object with data", () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
      type: "SET_EXPENSES",
      expenses,
    });
  });

  test("should fetch the expenses from firebase", (done) => {
    const store = mockStore(defaultUserState);
    store.dispatch(startSetExpenses()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "SET_EXPENSES",
        expenses,
      });
      done();
    });
  });
});
