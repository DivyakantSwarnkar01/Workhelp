import React, { useState, useEffect } from 'react';
import Gload from '../assets/GLoading.gif'; // Custom loading spinner
import './LiveTV.css'; // Custom styles

// Updated sample data structure for channels with embed URLs
const channelsData = {
  News: {
    Hindi: [
      { name: "Aaj Tak", url: "https://www.youtube.com/embed/Nq2wYlWFucg?si=JzYRVZdThc8bwjfG", logo: "https://via.placeholder.com/150" },
      { name: "NDTV India", url: "https://www.youtube.com/embed/ndtv", logo: "https://via.placeholder.com/150" },
      { name: "Sansad TV", url: "https://www.youtube.com/embed/5vXmajmQHEw?si=HPQ_ul7b4a2DxSgz", logo: "https://via.placeholder.com/150" },
      { name: "Sansad TV 2", url: "https://www.youtube.com/embed/dl6JkngW2cM?si=YPXJwQ9IiO6nGtHS", logo: "https://via.placeholder.com/150" },
      { name: "India TV", url: "https://www.youtube.com/embed/Xmm3Kr5P1Uw?si=-saur0Pb7_0M1jKO", logo: "https://via.placeholder.com/150" }
    ],
    English: [
      { name: "CNN News18", url: "https://www.youtube.com/embed/cnnnews18", logo: "https://via.placeholder.com/150" },
      { name: "BBC News", url: "https://www.youtube.com/embed/bbcnews", logo: "https://via.placeholder.com/150" },
      { name: "India Today", url: "https://www.youtube.com/embed/sYZtOFzM78M?si=AlvDPmlda2PhUOVV", logo: "https://via.placeholder.com/150" }
    ],
  },
  Entertainment: {
    Hindi: [
      { name: "Zee TV", url: "https://www.youtube.com/embed/zeetv", logo: "https://via.placeholder.com/150" },
      { name: "Star Plus", url: "https://www.youtube.com/embed/starplus", logo: "https://via.placeholder.com/150" },
    ],
  },
};

const LiveTVComponent = () => {
  const [activeCategory, setActiveCategory] = useState('News');
  const [activeLanguage, setActiveLanguage] = useState('Hindi');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate a data fetch or API call
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulate fetching data
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError('Failed to load channels');
      }
    };

    fetchData();
  }, [activeCategory, activeLanguage]);

  return (
    <div className="p-4 bg-lime-500 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-white">Live TV Channels</h1>

      <div className="flex space-x-4 mb-4">
        {/* Category Selector */}
        <div className="flex space-x-2 overflow-x-auto mb-4">
          {Object.keys(channelsData).map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Language Selector */}
        <div className="flex space-x-2 overflow-x-auto mb-4">
          {Object.keys(channelsData[activeCategory]).map(language => (
            <button
              key={language}
              className={`px-4 py-2 rounded ${activeLanguage === language ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'}`}
              onClick={() => setActiveLanguage(language)}
            >
              {language}
            </button>
          ))}
        </div>
      </div>

      {/* Loading and Error State */}
      {loading && (
        <div className="flex justify-center items-center">
          <img src={Gload} alt="Loading" className="w-16 h-16" />
          <span className="ml-2 text-white">Loading...</span>
        </div>
      )}
      {error && <p className="text-red-400">{error}</p>}

      {/* Channel List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {channelsData[activeCategory][activeLanguage]?.map(channel => (
          <div key={channel.name} className="p-4 bg-white rounded shadow-md flex flex-col items-center">
            <iframe
              src={channel.url}
              title={channel.name}
              className="w-full h-60 mb-2"
              allowFullScreen
            ></iframe>
            <h3 className="text-lg font-semibold mb-2">{channel.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveTVComponent;
