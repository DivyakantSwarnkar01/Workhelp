import React, { useState, useContext } from 'react';
import { FormDataContext } from './FormDataContext.jsx';
import CountrySelect from './CountrySelect';

function DetailsOption({ option }) {
  const { formData, updateFormData } = useContext(FormDataContext);
  const [formDataC, setFormDataC] = useState({
    option: { country: '' }
  });
  const [showNotification, setShowNotification] = useState(false); // State to manage notification visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(option, { [name]: value });
  };

  const handleCountryChange = (selectedOption) => {
    updateFormData(option, { country: selectedOption.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowNotification(true); // Show notification when form is submitted

    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="max-w-full mx-auto mt-10 p-6 border border-lime-500 rounded-lg shadow-lg bg-white">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Name of Blog Writer:</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
            type="text"
            name="WriterName"
            value={formData[option].WriterName || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <CountrySelect formData={formData} option={option} handleChange={handleCountryChange} />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Place:</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
            type="text"
            name="place"
            value={formData[option].place || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">About Writer:</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
            name="about"
            value={formData[option].about || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Sources:</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
            name="sources"
            value={formData[option].sources || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Citations:</label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
            name="citations"
            value={formData[option].citations || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Category of Post:</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
            type="text"
            name="CategoryOfPost"
            value={formData[option].CategoryOfPost || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Twitter Meta User Name:</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
            type="text"
            name="MetaTwitterPostPageUserName"
            value={formData[option].MetaTwitterPostPageUserName || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Twitter Meta Image:</label>
          <div className="flex items-center">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              name="MetaTwitterImage"
              required
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-lime-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-lime-600 transition duration-200 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v8.586l5.293 5.293 1.414-1.414L14 12H12z"
                />
              </svg>
              Upload Image
            </label>
          </div>
        </div>

        <button
          className="w-full bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 transition duration-200"
          type="submit"
        >
          Submit
        </button>
      </form>

      {/* Notification Pop-up */}
      {showNotification && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-lime-500 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300">
          Details Saved
        </div>
      )}
    </div>
  );
}

export default DetailsOption;
