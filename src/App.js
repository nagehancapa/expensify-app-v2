import { Routes, Route, Link, NavLink } from "react-router-dom";

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);

const AddExpensePage = () => <div>This is from my add expense component</div>;

const EditExpensePage = () => <div>This is from my edit expense component</div>;

const HelpPage = () => <div>This is from my help component</div>;

const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink end to="/">
      Dashboard
    </NavLink>
    <NavLink end to="/create">
      Create Expense
    </NavLink>
    <NavLink end to="/edit">
      Edit Expense
    </NavLink>
    <NavLink end to="/help">
      Help
    </NavLink>
  </header>
);

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ExpenseDashboardPage exact={true} />} />
        <Route path="/create" element={<AddExpensePage />} />
        <Route path="/edit" element={<EditExpensePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

// orgonizing routes
