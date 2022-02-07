import React from "react";
import ExpensesSummary from "../ExpensesSummary";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import expenses from "../../fixtures/expenses";
import { filters } from "../../fixtures/filters";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";

test("should correctly render ExpensesSummary with 1 expense", () => {
  const initialState = {
    expenses: [expenses[0]],
    filters,
  };
  const mockStore = configureStore();
  render(
    <Provider store={mockStore(initialState)}>
      <MemoryRouter>
        <ExpensesSummary />
      </MemoryRouter>
    </Provider>
  );
  const text = screen.getByRole("heading", {
    name: /Viewing 1 expense totaling € 1.95/i,
  });
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
      <MemoryRouter>
        <ExpensesSummary />
      </MemoryRouter>
    </Provider>
  );
  const text = screen.getByRole("heading", {
    name: /Viewing 3 expenses totaling € 1,141.95/i,
  });
  expect(text).toBeInTheDocument();
});
