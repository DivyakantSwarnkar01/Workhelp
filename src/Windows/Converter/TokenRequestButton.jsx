import React from 'react';

const TokenRequestButton = ({ downloadUrl }) => {
  return (
    <div className="mt-4">
      <a
        href={downloadUrl}
        download="converted_file.pdf"
        className="flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-700 text-white py-2 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500"
      >
        <DownloadIcon className="w-6 h-6 mr-2" />
        Download Here!
      </a>
    </div>
  );
};

// Custom SVG Icon for the button
const DownloadIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
    ></path>
  </svg>
);

export default TokenRequestButton;
