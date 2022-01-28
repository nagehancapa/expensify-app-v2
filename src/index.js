import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";
import { startSetExpenses } from "./store/expenses/actions";
import { login, logout } from "./store/user/actions";
import "./styles/styles.scss";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "./firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const jsx = (
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("uid", user.uid);
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
    });
  } else {
    store.dispatch(logout());
    renderApp();
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
serviceWorker.unregister();
