import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../store/user/actions";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  function onClick() {
    dispatch(startLogin());
  }

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>It's time to get your expenses under control.</p>
        <button className="button" onClick={onClick}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
