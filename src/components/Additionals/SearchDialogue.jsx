import React, { useState } from 'react';

function SearchDialog({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Call the search function
  };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="pr-12 py-1.5 pl-4 border rounded-lg w-80 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx={10} cy={10} r={7} />
        <line x1={17} y1={17} x2={13} y2={13} />
      </svg>
    </div>
  );
}

export default SearchDialog;
