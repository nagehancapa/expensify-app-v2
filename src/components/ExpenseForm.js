import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const ExpenseForm = () => {
  const [description, setDescription] = useState("");
  const [note, setNote] = useState("");
  const [amount, setAmount] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date());

  return (
    <div>
      <form>
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
          onChangeText={(e) => {
            //let userInput = amount;
            //if (!amount || amount.match(/^[0-9]{1,2}([.][0-9]{1,2})?$/)) {
            //(/^\d{1,}(\.\d{0,2})?$/)) {
            setAmount(e.target.value);
            //} else {
            // console.log("wtf");
            //}
          }}
        />
        <DatePicker value={createdAt} onChange={(date) => setCreatedAt(date)} />
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
