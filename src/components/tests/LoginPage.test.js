import React from "react";
import * as reactRedux from "react-redux";
import { shallow } from "enzyme";
import LoginPage from "../LoginPage";

// Mock useDispatch hook
const useDispatch = jest.spyOn(reactRedux, "useDispatch");

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

beforeEach(() => {
  useDispatch.mockClear();
});

test("should render LoginPage correctly", () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test("should call onClick", () => {
  const dispatch = jest.fn();
  useDispatch.mockReturnValue(dispatch);
  const wrapper = shallow(<LoginPage />);
  wrapper.find("button").simulate("click");
  expect(dispatch).toHaveBeenCalled();
});
