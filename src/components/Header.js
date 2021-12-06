import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink end to="/">
      Dashboard
    </NavLink>
    <NavLink end to="/create">
      Create Expense
    </NavLink>
    <NavLink end to="/help">
      Help
    </NavLink>
  </header>
);

export default Header;
