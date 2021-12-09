export const selectExpenses = (state) => state.expenses;
export const visibleExpenses = (state) =>
  getVisibleExpenses(state.expenses, state.filters);

// Get visible expenses
// destructured filters
// const getVisibleExpenses = (expenses, filters)
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
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
