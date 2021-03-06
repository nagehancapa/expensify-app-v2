import React from "react";
import ExpenseListFilters from "../ExpenseListFilters";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { filters, altFilters } from "../../fixtures/filters";
import { mount } from "enzyme";
import reducer from "../../store/filters/reducer";
import "jest-canvas-mock";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../../store/filters/actions";
import DateRangePicker from "@wojtekmaj/react-daterange-picker/dist/DateRangePicker";
import { act } from "react-dom/test-utils";

beforeAll(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date("January 1, 1970"));
});

afterAll(() => {
  jest.useRealTimers();
});

let getWrapper, wrapper, mockStore;

beforeEach(() => {
  getWrapper = (mockStore = createStore(reducer, { filters })) =>
    mount(
      <Provider store={mockStore}>
        <ExpenseListFilters />
      </Provider>
    );
  mockStore = createStore(reducer, { filters });
  mockStore.dispatch = jest.fn();
  wrapper = getWrapper(mockStore);
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt data correctly", () => {
  const getWrapper = (
    mockStore = createStore(reducer, { filters: altFilters })
  ) =>
    mount(
      <Provider store={mockStore}>
        <ExpenseListFilters />
      </Provider>
    );
  const wrapper = getWrapper();
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "rent";
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(mockStore.dispatch).toHaveBeenLastCalledWith(setTextFilter(value));
});

test("should sort by date", () => {
  const value = "date";
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(mockStore.dispatch).toHaveBeenCalledWith(sortByDate());
});

test("should sort by amount", () => {
  const value = "amount";
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(mockStore.dispatch).toHaveBeenCalledWith(sortByAmount());
});

test("should handle date changes", () => {
  const date = new Date();
  const startDate = date.setDate(date.getFullYear() + 4);
  const endDate = date.setDate(date.getFullYear() + 8);
  act(() => {
    wrapper.find(DateRangePicker).prop("onChange")([startDate, endDate]);
  });
  expect(mockStore.dispatch).toHaveBeenCalledWith(setStartDate(startDate));
  expect(mockStore.dispatch).toHaveBeenLastCalledWith(setEndDate(endDate));
});
