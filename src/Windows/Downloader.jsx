import { useState } from 'react';
import VideoSearchComponent from './Download/VideoSearchComponent';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Downloader = () => {
 const [showVideoSearch, setShowVideoSearch] = useState(false); // State to track if the button is clicked
 const [activeOption, setActiveOption] = useState('option0');


 const handleClick = () => {
    setShowVideoSearch(true); // Set showVideoSearch to true when the button is clicked
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };



  return (
<HelmetProvider>
  <Helmet><link rel="canonical" href="https://www.workhelper.shop/Downloader"/></Helmet>


    <div className='h-auto w-auto'>
        <div className=' bg-lime-500 h-44 w-full'>

        </div>
    <div className=' border-4 border-dotted border-rose-600 m-5 ' style={{ height: '600px' }}>
         <div className='flex justify-center'>
         
           <div className=' bg-indigo-500 rounded-md ml-2 mt-2 z-10'>
              <button className=" ml-0 mt-2 elative bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2  z-20" onClick={() => handleOptionClick('option0')}>
               Youtube Downloader
             </button>
           </div> 
           <div className=' bg-indigo-500 rounded-md ml-2 mt-2'>
             <button className=" ml-0 mt-2 elative bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20" onClick={() => handleOptionClick('option1')}>
               Twitter Downloader
             </button>
           </div> 
           <div className=' bg-indigo-500 rounded-md ml-2 mt-2'>
             <button className=" ml-0 mt-2 elative bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20" onClick={() => handleOptionClick('option2')}>
               Instagram Scrapper
             </button>
           </div> 
           <div className=' bg-indigo-500 rounded-md ml-2 mt-2'>
             <button className=" ml-0 mt-2 elative bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20" onClick={() => handleOptionClick('option3')}>
               Facebook Downloader
             </button>
           </div> 
           <div className=' bg-indigo-500 rounded-md ml-2 mt-2'>
             <button className=" ml-0 mt-2 elative bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20" onClick={() => handleOptionClick('option4')}>
               Other Website Downloader
             </button>
           </div> 
         </div>
         <div className='Justify-centre flex-row'>  
         {activeOption === 'option0' && (
        <div>
        <VideoSearchComponent  />
        </div>
      )}

          {activeOption === 'option1' && (
        <div>
        Hello This is Twitter Downloader Component 
        </div>
      )}

          {activeOption === 'option2' && (
        <div>
        Hello This is Instagram Downloader Component 
        </div>
      )}

          {activeOption === 'option3' && (
        <div>
        Hello This is Facebook Downloader Component 
        </div>
      )}

          {activeOption === 'option4' && (
        <div>
        This is Downloader Component from Downloading things from other website.
        </div>
      )}



         </div>
       </div>
    </div>
</HelmetProvider>
  );
};

export default Downloader;
