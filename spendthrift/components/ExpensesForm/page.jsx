"use client"
import React, { useState } from 'react';
import CategorySelector from '../CategorySelector/page';

function ExpenseForm() {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    // Implement expense recording and API interaction here
    // Update state, database, etc.
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Enter Expense</h2>
      <form onSubmit={handleExpenseSubmit}>
        {/* Input fields for amount, date, description */}
        <CategorySelector selectedCategory={category} onSelectCategory={setCategory} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
