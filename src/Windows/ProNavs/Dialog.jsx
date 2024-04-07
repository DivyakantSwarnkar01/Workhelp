import React from 'react';
import UserPage from './UserPage.jsx';

function Dialog({ id, type, content, onChange, onTypeChange }) {
  const handleChange = (e) => {
    onChange(id, e.target.value);
  };

  const handleTypeChange = (e) => {
    onTypeChange(id, e.target.value);
  };

  return (
    <div className="mb-4 border rounded-md p-4">
      <select
        value={type}
        onChange={handleTypeChange}
        className="bg-gray-200 p-2 rounded-md mb-2"
      >
        <option value="text">Text</option>
        <option value="image">Image</option>
        <option value="video">Video</option>
        <option value="pdf">PDF</option>
        {/* Add more options as needed */}
      </select>
      {type === 'text' && (
        <textarea
          value={content}
          onChange={handleChange}
          className="w-full p-2 mt-2 rounded-md"
          placeholder="Enter your text here..."
        />
      )}
      {/* Add other input fields for different types */}
    </div>
  );
}

export default Dialog;
