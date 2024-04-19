import React, { useState } from 'react';
import VideoSearchComponent from './Download/VideoSearchComponent';

const Downloader = () => {
 const [showVideoSearch, setShowVideoSearch] = useState(false); // State to track if the button is clicked

 const handleClick = () => {
    setShowVideoSearch(true); // Set showVideoSearch to true when the button is clicked
  };




  return (
    <div className='h-auto w-auto'>
        <div className=' bg-lime-500 h-44 w-full'>

        </div>
    <div className=' border-4 border-dotted border-rose-600 m-5 ' style={{ height: '600px' }}>
         <div className='flex justify-center'>
           <div className=' bg-indigo-500 rounded-md ml-2 mt-2 z-10'>
             <button className=" ml-3 mt-3 elative bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 z-20" onClick={handleClick}>
               Youtube Downloader
             </button>
           </div>  
           <div className=' bg-indigo-500 rounded-md ml-2 mt-2'>
             <button className=" ml-3 mt-3 elative bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 z-20">
               Twitter Downloader
             </button>
           </div> 
           <div className=' bg-indigo-500 rounded-md ml-2 mt-2'>
             <button className=" ml-3 mt-3 elative bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 z-20">
               Instagram Scrapper
             </button>
           </div> 
           <div className=' bg-indigo-500 rounded-md ml-2 mt-2'>
             <button className=" ml-3 mt-3 elative bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 z-20">
               Facebook Downloader
             </button>
           </div> 
           <div className=' bg-indigo-500 rounded-md ml-2 mt-2'>
             <button className=" ml-3 mt-3 elative bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 z-20">
               Other Website Downloader
             </button>
           </div> 
         </div>
         {showVideoSearch && <VideoSearchComponent />}
    </div>
    </div>
  );
};

export default Downloader;
