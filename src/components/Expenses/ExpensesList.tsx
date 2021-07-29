import React from "react";
import ExpenseItem from "src/components/Expenses/ExpenseItem";
import "src/components/Expenses/ExpensesList.css";

interface Props{
  items: any
}

export default function ExpensesList({items}:Props) {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense: any) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </ul>
  );
}
