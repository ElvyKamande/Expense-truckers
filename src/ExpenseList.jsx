import React, { useState } from "react";

const ExpenseList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Groceries", amount: 50 },
    { id: 2, name: "Rent", amount: 500 },
    { id: 3, name: "Utilities", amount: 100 },
    { id: 4, name: "Transportation", amount: 60 },
  ]);

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Expense Tracker</h1>
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table border="1" style={{ width: "100%", marginTop: "10px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Expense Name</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.id}</td>
              <td>{expense.name}</td>
              <td>${expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;