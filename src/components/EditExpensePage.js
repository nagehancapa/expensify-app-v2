import React from "react";
import { useParams } from "react-router-dom";

const EditExpensePage = (props) => {
  const { id } = useParams();
  return <div>Editing the expense with id of {id}</div>;
};

export default EditExpensePage;
