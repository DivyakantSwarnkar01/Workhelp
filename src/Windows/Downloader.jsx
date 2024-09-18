import { useState } from 'react';
import VideoSearchComponent from './Download/VideoSearchComponent';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Downloader = () => {
  const [activeOption, setActiveOption] = useState('option0');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="canonical" href="https://www.workhelper.shop/Downloader" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-lime-300 via-white to-indigo-100">
        {/* Header Section */}
        <div className="bg-lime-500 h-44 w-full flex items-center justify-center">
          <h1 className="text-4xl font-extrabold text-white">Media Downloader</h1>
        </div>

        {/* Main Content */}
        <div className="container mx-auto mt-8 p-6 bg-white shadow-xl rounded-lg">
          {/* Option Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 ${activeOption === 'option0' ? 'ring-2 ring-indigo-400' : ''}`}
              onClick={() => handleOptionClick('option0')}
            >
              YouTube Downloader
            </button>

            <button
              className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 ${activeOption === 'option1' ? 'ring-2 ring-indigo-400' : ''}`}
              onClick={() => handleOptionClick('option1')}
            >
              Twitter Downloader
            </button>

            <button
              className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 ${activeOption === 'option2' ? 'ring-2 ring-indigo-400' : ''}`}
              onClick={() => handleOptionClick('option2')}
            >
              Instagram Scraper
            </button>

            <button
              className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 ${activeOption === 'option3' ? 'ring-2 ring-indigo-400' : ''}`}
              onClick={() => handleOptionClick('option3')}
            >
              Facebook Downloader
            </button>

            <button
              className={`bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 ${activeOption === 'option4' ? 'ring-2 ring-indigo-400' : ''}`}
              onClick={() => handleOptionClick('option4')}
            >
              Other Website Downloader
            </button>
          </div>

          {/* Content Area */}
          <div className="flex justify-center">
            {activeOption === 'option0' && (
              <div className="w-full">
                <VideoSearchComponent />
              </div>
            )}

            {activeOption === 'option1' && (
              <div className="text-lg text-gray-700">Hello, this is the Twitter Downloader Component.</div>
            )}

            {activeOption === 'option2' && (
              <div className="text-lg text-gray-700">Hello, this is the Instagram Scraper Component.</div>
            )}

            {activeOption === 'option3' && (
              <div className="text-lg text-gray-700">Hello, this is the Facebook Downloader Component.</div>
            )}

            {activeOption === 'option4' && (
              <div className="text-lg text-gray-700">This is the Downloader Component for downloading content from other websites.</div>
            )}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Downloader;
