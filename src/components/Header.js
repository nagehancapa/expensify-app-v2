import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/dashboard">
            <h1>Expensify</h1>
          </Link>
          <button className="button button--link" onClick={onClick}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
