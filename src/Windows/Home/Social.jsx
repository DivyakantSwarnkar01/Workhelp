import React from 'react';

const Social = ({ url, title }) => {
  // Define the share URLs for each social media platform
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  const instagramShareUrl = `https://www.instagram.com/share?url=${encodeURIComponent(url)}`;
  const redditShareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;

  return (
    <div>
      {/* Facebook share button */}
      <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 m-2">Share on Facebook</button>
      </a>

      {/* Twitter share button */}
      <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2 m-2">Share on Twitter</button>
      </a>

      {/* Instagram share button */}
      <a href={instagramShareUrl} target="_blank" rel="noopener noreferrer">
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mr-2 m-2">Share on Instagram</button>
      </a>

      {/* Reddit share button */}
      <a href={redditShareUrl} target="_blank" rel="noopener noreferrer">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-2 m-2">Share on Reddit</button>
      </a>
    </div>
  );
};

export default Social;
