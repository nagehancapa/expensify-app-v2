import React from "react";
import * as reactRedux from "react-redux";
import { shallow } from "enzyme";
import EditExpensePage from "../EditExpensePage";
import expenses from "../../fixtures/expenses";
import { editExpense, removeExpense } from "../../store/expenses/actions";

const useDispatch = jest.spyOn(reactRedux, "useDispatch");

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  useDispatch.mockClear();
  useSelectorMock.mockClear();
});

test("should render EditExpensePage correctly", () => {
  const dummyExpenses = useSelectorMock.mockReturnValue(expenses);
  const wrapper = shallow(<EditExpensePage expense={dummyExpenses[2]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should handle edit expense", () => {
  const dummyExpenses = useSelectorMock.mockReturnValue(expenses);
  const dispatch = jest.fn();
  useDispatch.mockReturnValue(dispatch);
  const wrapper = shallow(<EditExpensePage expense={dummyExpenses[2]} />);
  wrapper.find("ExpenseForm").prop("onSubmit")(dummyExpenses[2]);
  expect(dispatch).toHaveBeenCalled();
  expect(mockedUsedNavigate).toHaveBeenLastCalledWith("/");
  expect(dispatch).toHaveBeenLastCalledWith(editExpense(dummyExpenses[2]));
});

test("should handle remove expense", () => {
  const dummyExpenses = useSelectorMock.mockReturnValue(expenses);
  const dispatch = jest.fn();
  useDispatch.mockReturnValue(dispatch);
  const wrapper = shallow(<EditExpensePage expense={dummyExpenses[2]} />);
  wrapper.find("button").simulate("click");
  expect(dispatch).toHaveBeenCalled();
  expect(mockedUsedNavigate).toHaveBeenLastCalledWith("/");
  expect(dispatch).toHaveBeenLastCalledWith(removeExpense(dummyExpenses[2]));
});
