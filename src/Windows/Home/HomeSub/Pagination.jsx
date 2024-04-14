import React from "react";

const Pagination = ({ currentPage, postsPerPage, posts, setCurrentPage }) => {
  // Calculate total number of pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Pagination buttons
  const paginationButtons = Array.from({ length: totalPages }, (_, i) => (
    <button key={i} onClick={() => setCurrentPage(i + 1)} className={`mx-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 ${currentPage === i + 1 ? 'bg-blue-700' : ''}`}>
      {i + 1}
    </button>
  ));

  return (
    <>
      {/* Pagination */}
      <div className="flex justify-center mt-8">{paginationButtons}</div>
    </>
  );
}

export default Pagination;
