import React from "react";
import "src/components/Expenses/ExpenseItem.css";
import ExpenseDate from "src/components/Expenses/ExpenseDate";
import Card from "src/components/UI/Card";

interface Props {
  title: string;
  amount: number;
  date: object;
}

export default function ExpenseItem({ title, amount, date }: Props) {

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card>
  );
}
