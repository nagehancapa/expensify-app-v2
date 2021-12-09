// Get visible expenses
// destructure filters
// const getVisibleExpenses = (expenses, filters)
export const getVisibleExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
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
      }
    });
};

export const selectExpenses = (state) => state.expenses;
