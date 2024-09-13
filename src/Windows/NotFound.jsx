// src/Windows/NotFound.jsx
import React from 'react';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="text-red-600 text-6xl mb-4">
        <svg
          className="w-24 h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h-2v2h2v-2zm0-4h-2v2h2V9z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold mb-2">404 Not Found</h1>
      <p className="text-lg mb-6">Oops! The page you are looking for does not exist.</p>
      <a href="/" className="text-blue-500 border border-blue-500 rounded px-4 py-2 text-lg hover:bg-blue-500 hover:text-white">
        Go to Homepage
      </a>
    </div>
  );
}

export default NotFound;
