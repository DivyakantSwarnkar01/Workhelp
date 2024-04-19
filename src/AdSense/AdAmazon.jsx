import React, { useEffect } from 'react';

const AmazonAd = ({ adScriptUrl }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = adScriptUrl;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [adScriptUrl]);

  return (
    <div className="border border-gray-300 rounded-md p-4 mb-4">
      {/* This is where the ad will be rendered */}
    </div>
  );
};

export default AmazonAd;
