import React from "react";
import "src/components/NewExpense/NewExpense.css";
import ExpenseForm from "src/components/NewExpense/ExpenseForm";

export default function NewExpense() {
  const onSaveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}
  