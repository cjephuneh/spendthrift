import React from 'react';

function CategorySelector({ selectedCategory, onSelectCategory }) {
  const categories = ['Groceries', 'Entertainment', 'Transportation', 'Bills'];

  return (
    <div className="mb-4">
      <label htmlFor="category" className="block text-sm font-medium mb-1">
        Select Category
      </label>
      <select
        id="category"
        className="w-full border rounded p-2"
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategorySelector;
