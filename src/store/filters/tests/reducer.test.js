import reducer from "../reducer";

const date = new Date();

test("should setup default filter values", () => {
  const state = reducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: new Date(date.getFullYear(), date.getMonth(), 1),
    endDate: new Date(date.getFullYear(), date.getMonth() + 1, 0),
  });
});

test("should set sortBy to amount", () => {
  const state = reducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const action = { type: "SORT_BY_DATE" };
  const state = reducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const text = "This is my filter";
  const action = {
    type: "SET_TEXT_FILTER",
    text,
  };
  const state = reducer(undefined, action);
  expect(state.text).toBe(text);
});

test("should set startDate filter", () => {
  const startDate = new Date();
  const action = {
    type: "SET_START_DATE",
    startDate,
  };
  const state = reducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

test("should set endDate filter", () => {
  const endDate = new Date();
  const action = {
    type: "SET_END_DATE",
    endDate,
  };
  const state = reducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});
