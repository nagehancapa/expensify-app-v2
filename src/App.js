import React from "react";
import { Routes, Route } from "react-router-dom";
import ExpenseDashboardPage from "./components/ExpenseDashboardPage";
import AddExpensePage from "./components/AddExpensePage";
import EditExpensePage from "./components/EditExpensePage";
import HelpPage from "./components/HelpPage";
import NotFoundPage from "./components/NotFoundPage";

import LoginPage from "./components/LoginPage";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage exact={true} />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<ExpenseDashboardPage />} />
          <Route path="/create" element={<AddExpensePage />} />
          <Route path="/edit/:id" element={<EditExpensePage />} />
        </Route>
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
