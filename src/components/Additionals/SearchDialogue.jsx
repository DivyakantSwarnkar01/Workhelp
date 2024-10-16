import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchDialog() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query) {
      navigate(`/search?query=${query}`); // Navigates to the search page with the query
    }
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
      <button onClick={handleSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2">
        🔍
      </button>
    </div>
  );
}

export default SearchDialog;
