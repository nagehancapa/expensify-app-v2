import React from "react";
import * as reactRedux from "react-redux";
import { shallow } from "enzyme";
import AddExpensePage from "../AddExpensePage";
import expenses from "../../fixtures/expenses";
import { addExpense } from "../../store/expenses/actions";
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
  expect(dispatch).toHaveBeenLastCalledWith(addExpense(expenses[1]));
});

// import React from "react";
// import { mount } from "enzyme";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import AddExpensePage from "../AddExpensePage";

// import { addExpense } from "../../store/expenses/actions";
// import reducer from "../../store/expenses/reducer";
// import expenses from "../../fixtures/expenses";
// import "jest-canvas-mock";

// const getWrapper = (
//   mockStore = createStore(reducer, { expense: expenses[1] })
// ) =>
//   mount(
//     <Provider store={mockStore}>
//       <AddExpensePage />
//     </Provider>
//   );

// const mockedUsedNavigate = jest.fn();

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockedUsedNavigate,
// }));

// test("should render AddExpensePage correctly", () => {
//   const wrapper = getWrapper();
//   expect(wrapper).toMatchSnapshot();
// });

// test("should dispatch the correct action on onSubmit", () => {
//   const mockStore = createStore(reducer, { expense: expenses[1] });
//   mockStore.dispatch = jest.fn();
//   const wrapper = getWrapper(mockStore);
//   wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
//   expect(mockStore.dispatch).toHaveBeenCalledWith(addExpense(expenses[1]));
//   expect(mockedUsedNavigate).toHaveBeenLastCalledWith("/");
// });
