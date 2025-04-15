// FilterForm.jsx
import React from 'react';

const FilterForm = ({ filter, setFilter }) => {
  return (
    <div className="filter-form">
      <label>Filter by Category: </label>
      <input
        placeholder="e.g. food, travel"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default FilterForm;
