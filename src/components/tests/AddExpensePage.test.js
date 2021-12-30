import React from "react";
import * as reactRedux from "react-redux";
import { shallow } from "enzyme";
import AddExpensePage from "../AddExpensePage";
import expenses from "../../fixtures/expenses";
// import { addExpense } from "../../store/expenses/actions";
// import toJson from "enzyme-to-json";

// Mock useDispatch hook
const useDispatch = jest.spyOn(reactRedux, "useDispatch");

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

// pay attention to write it at the top level of your file
const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  useDispatch.mockClear();
});

test("should render AddExpensePage correctly", () => {
  const wrapper = shallow(<AddExpensePage />);
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  const dispatch = jest.fn();
  useDispatch.mockReturnValue(dispatch);
  const wrapper = shallow(<AddExpensePage />);
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(dispatch).toHaveBeenCalled();
  expect(mockedUsedNavigate).toHaveBeenLastCalledWith("/");
  // expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1]);
  // expect(dispatch).toHaveBeenLastCalledWith(addExpense(expenses[1]));
});
