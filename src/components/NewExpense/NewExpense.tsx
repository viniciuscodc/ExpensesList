import React from "react";
import "src/components/NewExpense/NewExpense.css";
import ExpenseForm from "src/components/NewExpense/ExpenseForm";

export default function NewExpense(props:any) {
  const onSaveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}
  