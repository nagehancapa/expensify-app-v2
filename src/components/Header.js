import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogout } from "../store/user/actions";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  function onClick() {
    dispatch(startLogout());
  }

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <header>
      <h1>Expensify</h1>
      <NavLink end to="/">
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
