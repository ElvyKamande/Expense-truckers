// ExpenseList.jsx
import React, { useState } from 'react';

const ExpenseList = ({ expenses }) => {
  const [expenseList, setExpenseList] = useState(expenses);
  const [newExpense, setNewExpense] = useState({ description: '', amount: '' });

  const handleDelete = (id) => {
    setExpenseList(expenseList.filter((expense) => expense.id !== id));
  };

  const handleAdd = () => {
    if (newExpense.description.trim() && newExpense.amount.trim()) {
      const newId = expenseList.length ? expenseList[expenseList.length - 1].id + 1 : 1;
      setExpenseList([...expenseList, { id: newId, ...newExpense }]);
      setNewExpense({ description: '', amount: '' });
    }
  };

  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenseList.map((expense) => (
          <li key={expense.id}>
            {expense.description}: ${expense.amount}
            <button onClick={() => handleDelete(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={newExpense.description}
          onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
        />
        <button onClick={handleAdd}>Add Expense</button>
      </div>
    </div>
  );
};

export default ExpenseList;
