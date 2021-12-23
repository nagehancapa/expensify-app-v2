const date1 = new Date("January 1, 1970");
const date2 = new Date("January 1, 1970");

const expenses = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: 0,
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 109500,
    createdAt: date1.setDate(date1.getDate() - 4),
  },
  {
    id: "3",
    description: "Credit Card",
    note: "",
    amount: 4500,
    createdAt: date2.setDate(date2.getDate() + 4),
  },
];

export default expenses;
