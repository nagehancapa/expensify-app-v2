import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../ExpenseForm";
import expenses from "../../fixtures/expenses";
// import toJson from "enzyme-to-json";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "jest-canvas-mock";

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

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  // console.log(toJson(wrapper.find("p")));
  const error = wrapper.find("p").children();
  expect(error.isEmptyRender()).toBe(false);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const value = "New description";
  const wrapper = shallow(<ExpenseForm />);
  //at(0) means first input
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  // console.log(wrapper.find("input").get(0).props.value);
  expect(wrapper.find("input").get(0).props.value).toBe(value);
});

test("should set description on input change test with testing library", () => {
  render(<ExpenseForm />);
  const input = screen.getByPlaceholderText("Description");
  userEvent.type(input, "second description");
  expect(screen.getByPlaceholderText("Description")).toHaveValue(
    "second description"
  );
});

test("should set note on textarea change", () => {
  const value = "New note";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: { value },
  });
  // console.log(wrapper.find("textarea").get(0).props.value);
  expect(wrapper.find("textarea").get(0).props.value).toBe(value);
});

test("should set note on textarea change test with testing library", () => {
  render(<ExpenseForm />);
  const textarea = screen.getByPlaceholderText(/Add a note/);
  userEvent.type(textarea, "second note");
  expect(screen.getByPlaceholderText(/Add a note/)).toHaveValue("second note");
});

test("should set amount if valid input", () => {
  const value = "23.50";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });
  // console.log(wrapper.find("input").get(1).props.value);
  expect(wrapper.find("input").get(1).props.value).toBe(value);
});

test("should set amount if valid input test with testing library", () => {
  render(<ExpenseForm />);
  const input = screen.getByPlaceholderText("Amount");
  userEvent.type(input, "32.50");
  expect(screen.getByPlaceholderText("Amount")).toHaveValue("32.50");
});

test("should not set amount if invalid input", () => {
  const value = "12.122";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: { value },
  });
  // console.log(wrapper.find("input").get(1).props);
  expect(wrapper.find("input").get(1).props.value).toBe("");
});

test("should not set amount if invalid input test with testing library", () => {
  render(<ExpenseForm />);
  const input = screen.getByPlaceholderText("Amount");
  userEvent.type(input, "12.122");
  expect(screen.getByPlaceholderText("Amount")).toHaveValue("12.12");
});

test("should call onSubmit prop for valid form submission", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  const error = wrapper.find("p").children();
  expect(error.isEmptyRender()).toBe(true);
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
  });
});

test("should set new date on date change", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("DatePicker").prop("onChange")(new Date());
  // const datepicker = wrapper.find("DatePicker");
  // console.log(datepicker.get(0).props.value);
  expect(wrapper.find("DatePicker").get(0).props.value).toEqual(new Date());
});
