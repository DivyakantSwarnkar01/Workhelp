import React, { useState } from 'react';
import { fetchVideo } from './apService.js'; // assuming you have an apiService file as mentioned before

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
      const data = await fetchVideo(searchQuery);
      setVideoData(data);
    } catch (error) {
      setError('Error fetching video. Please try again.');
      console.error('Error fetching video:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!videoData) {
      return;
    }

    // Combine video and audio streams
    const videoUrl = videoData.streamingData.formats[0].url;
    const audioUrl = videoData.streamingData.formats[1].url;

    // Construct a single source URL
    const sourceUrl = `${videoUrl}&${audioUrl}`;

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = sourceUrl;
    a.download = 'My Video 001.mp4';
    a.click();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter video ID"
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && "Loading..."}
      {error && <p>{error}</p>}
      
      {videoData && (
        <div>
          <h2>{videoData.videoDetails.title}</h2>
          <p>{videoData.videoDetails.description}</p>
          <img src={videoData.videoDetails.thumbnail.thumbnails[0].url} alt="Thumbnail" />
          <video controls>
            <source src={videoData.streamingData.formats[0].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={handleDownload}>Download Video</button>
        </div>
      )}
    </div>
  );
};

export default VideoSearchComponent;