const date1 = new Date("January 1, 1970");
const date2 = new Date("January 1, 1970");

export const filters = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

export const altFilters = {
  text: "bills",
  sortBy: "amount",
  startDate: date1,
  endDate: date2.setDate(date2.getDate() + 3),
};
