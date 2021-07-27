import React, { useState } from "react";
import "src/components/Expenses/ExpenseItem.css";
import ExpenseDate from "src/components/Expenses/ExpenseDate";
import Card from "src/components/UI/Card";

interface Props {
  title: string;
  amount: number;
  date: object;
}

export default function ExpenseItem({ title, amount, date }: Props) {
  const [titleState, setTitleState] = useState(title);

  const clickHandler = () => {
    setTitleState("Updated");
    console.log(titleState);
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titleState}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}
