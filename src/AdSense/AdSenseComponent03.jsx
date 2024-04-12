// AdSenseComponent.js
import React, { useEffect } from 'react';

const AdSenseComponent03 = () => {
  useEffect(() => {
    // Trigger AdSense to load ads
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div>
    <ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-6s+ea+2i-1i-4k"
     data-ad-client="ca-pub-4584849168084150"
     data-ad-slot="6637618350"></ins>
     </div>
  );
};

export default AdSenseComponent03;