import React, { useState } from 'react';
import { fetchVideo } from './apService.js'; // assuming you have an apiService file
import Gload from '../../assets/GLoading.gif';
import '../Home/PostDetails.css';

function extractVideoId(url) {
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

const VideoSearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const videoId = extractVideoId(searchQuery);
      if (!videoId) {
        throw new Error('Invalid YouTube URL');
      }
      const data = await fetchVideo(videoId);
      setVideoData(data);
    } catch (error) {
      setError('Error fetching video. Please try again.');
      console.error('Error fetching video:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!videoData || !videoData.streamingData || !videoData.streamingData.formats || videoData.streamingData.formats.length === 0) {
      return;
    }

    try {
      const videoStream = await fetch(videoData.streamingData.formats[0].url);
      const videoBlob = await videoStream.blob();

      const url = URL.createObjectURL(videoBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'video.mp4'; // Set filename
      a.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading video:', error);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-md w-full max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Download Videos from YouTube and More
      </h1>
      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter YouTube video link"
          className="p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white font-bold py-2 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Search
        </button>
      </form>

      {isLoading && (
        <div className="flex items-center justify-center mt-6">
          <img src={Gload} alt="Loading" className="w-16 h-16" />
        </div>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {videoData && videoData.streamingData && videoData.streamingData.formats && videoData.streamingData.formats.length > 0 && (
        <div className="mt-8 w-full">
          <h2 className="text-lg font-bold mb-2 text-gray-800">
            {videoData.videoDetails.title}
          </h2>
          <p className="text-gray-600 mb-4">{videoData.videoDetails.description}</p>
          <div className="w-full mb-4">
            <video controls className="w-full rounded-md">
              <source src={videoData.streamingData.formats[0].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <button
            className="bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
            onClick={handleDownload}
          >
            Download Video
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoSearchComponent;
