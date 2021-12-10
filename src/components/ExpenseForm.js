import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const ExpenseForm = (props) => {
  const [description, setDescription] = useState("");
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date());
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
    <div>
      <form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={onAmountChange}
        />
        <DatePicker value={createdAt} onChange={onDateChange} />
        <textarea
          placeholder="Add a note for your expense (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
