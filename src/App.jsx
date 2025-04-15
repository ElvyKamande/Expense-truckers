// App.jsx
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import FilterForm from './FilterForm';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('');

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <FilterForm filter={filter} setFilter={setFilter} />
      <ExpenseList expenses={expenses} filter={filter} />
    </div>
  );
};

export default App;
