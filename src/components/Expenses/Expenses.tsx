import React, { useState } from "react";
import Card from "src/components/UI/Card";
import ExpensesChart from "src/components/Expenses/ExpensesChart";
import ExpensesFilter from "src/components/Expenses/ExpensesFilter";
import ExpensesList from "src/components/Expenses/ExpensesList";
import "src/components/Expenses/Expenses.css";

interface Props{
  items:any
}

export default function Expenses({items}:Props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear: any) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense: any) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">

       <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
     <ExpensesList
          items={filteredExpenses}
        />
    </Card>
  );
}
