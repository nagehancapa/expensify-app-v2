import React from "react";
import { shallow } from "enzyme";
import * as reactRedux from "react-redux";
import ExpenseList from "../ExpenseList";
import expenses from "../../fixtures/expenses";

describe("test suite", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  test("should render ExpenseList with expenses", () => {
    const dummyExpenses = useSelectorMock.mockReturnValue(expenses);
    const wrapper = shallow(<ExpenseList expenses={dummyExpenses} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should render ExpenseList with empty message", () => {
    const dummyExpenses = useSelectorMock.mockReturnValue([]);
    const wrapper = shallow(<ExpenseList expenses={dummyExpenses} />);
    expect(wrapper).toMatchSnapshot();
  });
});
