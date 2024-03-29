import React, { useState } from "react";
import "./ExpenseForm.css";


const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
            event.preventDefault();

            const expenseData = {
                 title: enteredTitle,
                 amount: enteredAmount,
                 date: enteredDate 
            };

            props.onSaveExpenseData(expenseData);
            setEnteredTitle("");
            setEnteredDate("");
            setEnteredAmount("");

  };      

  return (   
    <form onSubmit={submitHandler}>
      <div className="new_expense_controls">
        <div className="new_expense_control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new_expense_control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new_expense_control">
          <label>Pick a Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new_expense_actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
