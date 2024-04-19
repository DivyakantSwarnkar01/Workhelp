import React from "react";
import AdSenseComponent02 from "../../AdSense/AdSenseComponent02";
import AmazonAd from "../../AdSense/AdAmazon";



function rghs(){
                  const adScriptUrl = 'https://amzn.to/3JogpKL';


    return(
     <div className="flex flex-col mt-10 ml-24 mr-10 h-auto w-96">
        <div className="bg-green-600 p-4 mb-4 rounded-md hover:shadow-lg">
          <h2 className="text-lg font-bold text-green-800 mb-4"> Recently Added Posts</h2>
          <div className='bg-green-200'><p>Content 1</p></div>
        </div>
        <div className="bg-green-600 p-4 mt-32 rounded-md hover:shadow-lg">
          <h2 className="text-lg font-bold text-green-800 mb-4">Advertisement</h2>
            <div className='bg-green-200'>
            <a href="https://amzn.to/3JogpKL" target="_blank" rel="noopener noreferrer">Product Link</a>
            </div>
         </div>
      </div>
    )
}

export default rghs;