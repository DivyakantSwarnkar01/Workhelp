import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  // Create an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-8">
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`mx-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 ${currentPage === page && 'bg-blue-700'}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
