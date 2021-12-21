import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount,
} from "../actions";

test("should generate set start date action object", () => {
  const action = setStartDate(new Date("January 1, 1970"));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: new Date("January 1, 1970"),
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(new Date("January 1, 1970"));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: new Date("January 1, 1970"),
  });
});

test("should generate set text filter object with text value", () => {
  const action = setTextFilter("bill");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "bill",
  });
});

test("should generate set text filter object with default value", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("should generate action object for sort by date", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

test("should generate action object for sort by amount", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});
