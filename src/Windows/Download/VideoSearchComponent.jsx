import React, { useState } from 'react';
import { fetchVideo } from './apService.js'; // assuming you have an apiService file as mentioned before
import Gload from '../../assets/GLoading.gif';
import '../Home/PostDetails.css';

function extractVideoId(url) {
  // Match the video ID pattern in the YouTube URL
  const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);

  // If a match is found, return the video ID, otherwise return null
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
    if (!videoData) {
      return;
    }

    try {
      // Get the video stream data from the first format
      const videoStream = await fetch(videoData.streamingData.formats[0].url);
      const videoBlob = await videoStream.blob();

      // Create a blob URL for the video
      const url = URL.createObjectURL(videoBlob);

      // Create a temporary anchor element
      const a = document.createElement('a');
      a.href = url;
      a.download = 'video.mp4'; // Set the filename for the download
      a.click();

      // Clean up
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading video:', error);
    }
  };


  return (
    <div className='Flex border-solid border-4 border-lime-500 rounded-md  w-52 h-52 ml-96 mt-5 items-center'>
      <h1 className='sr-only'> Download Video from Youtube and Multiple other Websites.</h1>
      <form className='Flex-col bg-lime-300 mt-5 ' onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter video Link here!"
          className='m-3 '
        />
        <button type="submit" className='Flex-col border-4 border-amber-500 bg-rose-600 ml-20 mt-10'>Search</button>
      </form>

      {isLoading && <div> <img src={Gload}/>"Loading..."</div>}
      {error && <p>{error}</p>}
      
      {videoData && (
        <div className='Grid gap-4 grid-cols-3'>
          
            <h2 className='bg-green-600 font-bold text-white'>{videoData.videoDetails.title}</h2>
            <p className='bg-green-600 font-bold text-white'>{videoData.videoDetails.description}</p>
            <video controls>
              <source src={videoData.streamingData.formats[0].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          
          <button className='bg-green-600 font-bold text-white mt-0' onClick={handleDownload}> Click on More Option than Download to download Video</button>
        </div>
      )}
    </div>
  );
};

export default VideoSearchComponent;
