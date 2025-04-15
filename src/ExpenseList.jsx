// ExpenseList.jsx
import React from 'react';

const sampleExpenses = [
  { name: 'Groceries', amount: 50, category: 'Food' },
  { name: 'Taxi', amount: 20, category: 'Transport' },
  { name: 'Movie', amount: 15, category: 'Entertainment' },
  { name: 'Book', amount: 12, category: 'Education' },
];

const ExpenseList = ({ expenses = sampleExpenses, filter }) => {
  // Removed duplicate filteredExpenses declaration and unused handleDelete logic

  const [expensesState, setExpensesState] = React.useState(expenses);

  const handleDelete = (indexToDelete) => {
    const updatedExpenses = expensesState.filter((_, index) => index !== indexToDelete);
    setExpensesState(updatedExpenses);
  };

  const filteredExpenses = filter
    ? expensesState.filter(exp => exp.category === filter)
    : expensesState;

  return (
    <div className="expense-list">
      <h2>Expenses</h2>
      {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount (ksh)</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseList;
