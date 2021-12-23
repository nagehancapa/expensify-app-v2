import { getVisibleExpenses } from "../selectors";
import expenses from "../../../fixtures/expenses";

test("should filter by text value", () => {
  // filters key's values are default values except text
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should filter by start date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: new Date("January 1, 1970"),
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("should filter by end date", () => {
  const date = new Date("January 1, 1970");
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: date.setDate(date.getDate() + 2),
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
