import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import "numeral/locales/nl-nl";

// destructured props object
const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  // const date = new Date(createdAt).toLocaleDateString("en-US", {
  //   month: "long",
  //   day: "numeric",
  //   year: "numeric",
  // });
  numeral.locale("nl-nl");
  return (
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h3>{description}</h3>
        <span>{moment(createdAt).format("MMMM Do, YYYY")}</span>
      </div>
      <h3>{numeral(amount / 100).format("$0,0.00")}</h3>
    </Link>
  );
};

export default ExpenseListItem;
