import React from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../store/user/actions";

const LoginPage = () => {
  const dispatch = useDispatch();
  function onClick() {
    dispatch(startLogin());
  }

  return (
    <div>
      <button onClick={onClick}>Login</button>
    </div>
  );
};

export default LoginPage;
