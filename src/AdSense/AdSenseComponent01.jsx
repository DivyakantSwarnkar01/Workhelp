// AdSenseComponent.js
import React, { useEffect } from 'react';

const AdSenseComponent01 = () => {
  useEffect(() => {
    // Trigger AdSense to load ads
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
     <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-4584849168084150"
          data-ad-slot="1632186769"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
     </div>
  );
};

export default AdSenseComponent01;
