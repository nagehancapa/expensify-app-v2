import uuid from "uuid";

export default (id = 0) => {
  // return jest.mock("uuid", () => jest.fn(() => id));
  return jest.mock("uuid/v4", () => () => id);
};
