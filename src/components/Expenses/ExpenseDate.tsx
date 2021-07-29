import React from "react";
import "src/components/Expenses/ExpenseDate.css";

interface Props {
  date: any;
}

export default function ExpenseDate({ date }: Props) {
  
  const month: string = date.toLocaleString("en-us", { month: "long" });
  
  const year: string = date.toLocaleString("en-us", { day: "2-digit" });
 
  const day: string = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
