// src/components/Home/HomeSub/Pagination.jsx

import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handler for First Page
  const goToFirst = () => {
    if (currentPage !== 1) {
      handlePageChange(1);
    }
  };

  // Handler for Last Page
  const goToLast = () => {
    if (currentPage !== totalPages) {
      handlePageChange(totalPages);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {/* First Page Button */}
      <button
        onClick={goToFirst}
        disabled={currentPage === 1}
        className={`p-2 rounded-full ${
          currentPage === 1
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300'
        }`}
        aria-label="First Page"
      >
        <i className="fas fa-angle-double-left"></i>
      </button>

      {/* Previous Page Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-full ${
          currentPage === 1
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300'
        }`}
        aria-label="Previous Page"
      >
        <i className="fas fa-angle-left"></i>
      </button>

      {/* Page Numbers */}
      <div className="flex space-x-1">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-3 py-1 rounded-md font-semibold transition-colors duration-300 ${
              currentPage === number
                ? 'bg-teal-700 text-white'
                : 'bg-teal-500 text-white hover:bg-teal-600'
            }`}
            aria-current={currentPage === number ? 'page' : undefined}
          >
            {number}
          </button>
        ))}
      </div>

      {/* Next Page Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full ${
          currentPage === totalPages
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300'
        }`}
        aria-label="Next Page"
      >
        <i className="fas fa-angle-right"></i>
      </button>

      {/* Last Page Button */}
      <button
        onClick={goToLast}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full ${
          currentPage === totalPages
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300'
        }`}
        aria-label="Last Page"
      >
        <i className="fas fa-angle-double-right"></i>
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default Pagination;
