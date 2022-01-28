import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../src/store/user/selectors";
import Header from "./components/Header";

const PrivateRoute = (props) => {
  const user = useSelector(selectUser);
  return user ? (
    <div>
      <Header />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" />
  );
};
export default PrivateRoute;
