export const selectExpenses = (state) => state.expenses;
export const selectVisibleExpenses = (state) =>
  getVisibleExpenses(state.expenses, state.filters);

export const selectTotalExpense = (state) =>
  getTotalExpense(getVisibleExpenses(state.expenses, state.filters));

// Get visible expenses
// destructured filters
// const getVisibleExpenses = (expenses, filters)
export const getVisibleExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
  return expenses
    .filter((expense) => {
      const createdAtMoment = new Date(expense.createdAt);
      const startDateMatch = startDate ? createdAtMoment >= startDate : true;
      const endDateMatch = endDate ? createdAtMoment <= endDate : true;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        // return -1 if a come first, 1 if b come first
        // most recent expense up top
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      } else {
        return null;
      }
    });
};

export const getTotalExpense = (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};
