// ExpenseForm.jsx
import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    category: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.amount || !formData.category) return;
    onAddExpense({ ...formData, amount: parseFloat(formData.amount) });
    setFormData({ name: '', amount: '', category: '' });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Expense name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
