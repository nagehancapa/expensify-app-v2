import React from "react";
import ExpensesSummary from "../ExpensesSummary";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import expenses from "../../fixtures/expenses";
import { filters } from "../../fixtures/filters";
import configureStore from "redux-mock-store";

test("should correctly render ExpensesSummary with 1 expense", () => {
  const initialState = {
    expenses: [expenses[0]],
    filters,
  };
  const mockStore = configureStore();
  render(
    <Provider store={mockStore(initialState)}>
      <ExpensesSummary />
    </Provider>
  );
  const text = screen.getByText("Viewing 1 expense totaling € 1.95");
  expect(text).toBeInTheDocument();
});

test("should correctly render ExpensesSummary with multiple expenses", () => {
  const initialState = {
    expenses,
    filters,
  };
  const mockStore = configureStore();
  render(
    <Provider store={mockStore(initialState)}>
      <ExpensesSummary />
    </Provider>
  );
  const text = screen.getByText("Viewing 3 expenses totaling € 1,141.95");
  expect(text).toBeInTheDocument();
});
