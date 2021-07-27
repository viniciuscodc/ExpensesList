import React from "react";
import "src/components/Expenses/ExpenseDate.css";

export default function ExpenseDate(date:any) {
  
  const month: string = date.date.toLocaleString("en-us", { month: "long" });
  
  const year: string = date.date.toLocaleString("en-us", { day: "2-digit" });
 
  const day: string = date.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
