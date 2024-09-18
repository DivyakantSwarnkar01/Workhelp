import React, { useEffect, useRef } from 'react';

function Modal({ closeModal, position }) {
  const modalRef = useRef(null);

  useEffect(() => {
    // Function to handle click events outside of the modal
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    // Add event listener on component mount
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div 
      className="absolute z-20 bg-lime-600 p-2 rounded-lg shadow-lg border border-gray-300"
      style={{
        top: `${position.top + 5}px`, // Adjusted to add margin below
        left: `${position.left}px`,
        transform: 'translateX(-50%)', // Center the modal horizontally relative to its own width
        minWidth: '200px',
        maxWidth: '250px',
        width: 'auto'
      }}
      ref={modalRef} // Attach ref to the modal
    >
      <div className="flex flex-col">
        {/* Header */}
        <div className="bg-gray-800 text-white p-1 rounded-t-lg text-center text-lg font-bold">
          Workhelper
        </div>
        {/* Modal Content */}
        <ul className="space-y-1 mt-2">
          <li><a href="/profile" className="block text-md font-bold text-white hover:bg-gray-700 px-3 py-1 rounded">User Profile</a></li>
          <li><a href="/services" className="block text-md font-bold text-white hover:bg-gray-700 px-3 py-1 rounded">Services</a></li>
          <li><a href="/posts" className="block text-md font-bold text-white hover:bg-gray-700 px-3 py-1 rounded">Posts</a></li>
          <li><a href="/earn" className="block text-md font-bold text-white hover:bg-gray-700 px-3 py-1 rounded">Earn Through Posts</a></li>
          <li><a href="/saas-services" className="block text-md font-bold text-white hover:bg-gray-700 px-3 py-1 rounded">SaaS Services</a></li>
          <li><a href="/ads-services" className="block text-md font-bold text-white hover:bg-gray-700 px-3 py-1 rounded">Ads Services</a></li>
          <li><a href="/policy" className="block text-md font-bold text-white hover:bg-gray-700 px-3 py-1 rounded">Policy</a></li>
          <li><a href="/customer-support" className="block text-md font-bold text-white hover:bg-gray-700 px-3 py-1 rounded">Customer Support</a></li>
          <li><button
            onClick={() => {
              closeModal();
              // Additional functionality to handle "Quit" action if needed
            }}
            className="block text-md font-bold text-white hover:bg-gray-700 px-3 py-1 rounded w-full text-left"
          >
            Quit
          </button></li>
        </ul>
      </div>
    </div>
  );
}

export default Modal;
