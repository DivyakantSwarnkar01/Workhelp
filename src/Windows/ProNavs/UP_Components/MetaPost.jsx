import React, { useState } from 'react';

function MetaOption({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    place: '',
    about: '',
    sources: '',
    citations: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-md">
      <h2 className="text-lg font-bold mb-4 bg-orange-500 text-white"><p className='ml-32'>Meta Information </p></h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Name of Blog Writer:</label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Country:</label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Place:</label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">About Writer:</label>
          <textarea
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            name="about"
            value={formData.about}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Sources:</label>
          <textarea
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            name="sources"
            value={formData.sources}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Citations:</label>
          <textarea
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            name="citations"
            value={formData.citations}
            onChange={handleChange}
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MetaOption;
