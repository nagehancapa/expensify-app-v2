import React, { useState } from "react";
import DatePicker from "react-date-picker";

const ExpenseForm = (props) => {
  const [description, setDescription] = useState(
    props.expense ? props.expense.description : ""
  );
  const [note, setNote] = useState(props.expense ? props.expense.note : "");
  const [amount, setAmount] = useState(
    props.expense ? (props.expense.amount / 100).toString() : ""
  );
  const [createdAt, setCreatedAt] = useState(
    props.expense ? new Date(props.expense.createdAt) : new Date()
  );
  const [error, setError] = useState("");

  function onAmountChange(e) {
    const regex = /^\d{1,}(\.\d{0,2})?$/;
    const amount = e.target.value;
    if (!amount || amount.match(regex)) {
      setAmount(amount);
    } else {
    }
  }

  function onDateChange(createdAt) {
    if (createdAt) {
      setCreatedAt(createdAt);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!description || !amount) {
      setError("Please provide description and amount.");
    } else {
      setError("");
      props.onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.setTime(createdAt.getTime()),
        note,
      });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      {error && <p className="form__error">{error}</p>}
      <input
        type="text"
        placeholder="Description"
        autoFocus
        className="text-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        className="text-input"
        value={amount}
        onChange={onAmountChange}
      />
      <DatePicker value={createdAt} onChange={onDateChange} />
      <textarea
        placeholder="Add a note for your expense (optional)"
        className="textarea"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <div>
        <button className="button">Save Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
