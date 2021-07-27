import React, { useState } from "react";
import "src/components/NewExpense/ExpenseForm.css";

export default function ExpenseForm(props: any) {
  const [titleState, setTitleState] = useState("");
  const [amountState, setAmountState] = useState("");
  const [dateState, setDateState] = useState("");

  const titleChangeHandler = (event: any) => {
    setTitleState(event.target.value);
  };
  const amountChangeHandler = (event: any) => {
    setAmountState(event.target.value);
  };
  const dateChangeHandler = (event: any) => {
    setDateState(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    const expenseData = {
      title: titleState,
      amount: amountState,
      date: new Date(dateState),
    };
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleState} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amountState} onChange={amountChangeHandler} min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={dateState}
            onChange={dateChangeHandler}
            min="2017-02-15"
            max="2023-11-26"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}
