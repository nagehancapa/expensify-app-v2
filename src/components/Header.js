import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogout } from "../store/user/actions";

const Header = () => {
  const dispatch = useDispatch();
  function onClick() {
    dispatch(startLogout());
  }

  return (
    <header>
      <h1>Expensify</h1>
      <NavLink end to="/dashboard">
        Dashboard
      </NavLink>
      <NavLink end to="/create">
        Create Expense
      </NavLink>
      <button onClick={onClick}>Logout</button>
    </header>
  );
};

export default Header;
