// import React from "react";
// import * as reactRedux from "react-redux";
// import { shallow } from "enzyme";
// import ExpenseListFilters from "../ExpenseListFilters";
// import { filters, altFilters } from "../../fixtures/filters";

// const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
// const useDispatch = jest.spyOn(reactRedux, "useDispatch");

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useDispatch: jest.fn(),
// }));

// let onTextChange, onSortChange, onDateChange, wrapper;

// beforeEach(() => {
//   onTextChange = jest.fn();
//   onSortChange = jest.fn();
//   onDateChange = jest.fn();
//   wrapper = shallow(<ExpenseListFilters filters={filters} />);
//   useSelectorMock.mockClear();
//   useDispatch.mockClear();
// });

// test("should render ExpenseListFilters correctly", () => {
//   expect(wrapper).toMatchSnapshot();
// });

import ExpenseListFilters from "../ExpenseListFilters";
import { createStore } from "redux";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import React from "react";
import { filters, altFilters } from "../../fixtures/filters";
import { shallow, mount } from "enzyme";
import reducer from "../../store/filters/reducer";
import "jest-canvas-mock";

test("should render ExpenseListFilters correctly", () => {
  const getWrapper = (mockStore = createStore(reducer, { filters })) =>
    mount(
      <Provider store={mockStore}>
        <ExpenseListFilters />
      </Provider>
    );
  const wrapper = getWrapper();
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
