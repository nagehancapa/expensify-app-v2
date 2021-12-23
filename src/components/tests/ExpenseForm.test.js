import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../ExpenseForm";
import expenses from "../../fixtures/expenses";

beforeAll(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date("January 1, 1970"));
});

afterAll(() => {
  jest.useRealTimers();
});

test("should render ExpenseForm correctly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm correctly with expense data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});
