import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';


const Converter = () => {
  const [activeOption, setActiveOption] = useState('option0');

  const handleClickOptions = (option) => {
    setActiveOption(option);
  }



  return (
    <HelmetProvider><Helmet> <link rel="canonical" href='https://www.workhelper.shop/Converter'/>
     </Helmet>
    <div className='box-border bg-lime-500 border-t-0 w-full h-36'>
    </div>
    <div className=' border-2 border-dashed border-cyan-500 h-96 w-auto m-6'>
      <div className='flex'>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-0 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20" onClick={()=>handleClickOptions('option0')}>
               PDF To JPEG
             </button>
         </div>   
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20" onClick={()=>handleClickOptions('option1')}>
               JPEG to PDF
             </button>
         </div>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20" onClick={()=>handleClickOptions('option2')}>
               PDF to PNG
             </button>
         </div>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20" onClick={()=>handleClickOptions('option3')}>
               PNG to PDF
             </button>
         </div>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20" onClick={()=>handleClickOptions('option4')}>
               Image to Excel Sheet
             </button>
         </div>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20" onClick={()=>handleClickOptions('option5')}>
               Excel sheet to Image
             </button>
         </div> 
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20" onClick={()=>handleClickOptions('option6')}>
               Photo Compress
             </button>
         </div>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20" onClick={()=>handleClickOptions('option7')}>
               PDF Compress
             </button>
         </div>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20"onClick={()=>handleClickOptions('option8')}>
               File Compress
             </button>
         </div>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20" onClick={()=>handleClickOptions('option9')}>
               Excel Sitemap
             </button>
         </div>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20" onClick={()=>handleClickOptions('option10')}>
              Other Extension Convert
             </button>
         </div>
      </div>
      
      {activeOption === 'option0' &&(
        <div className='bg-transparent justify-center mt-32 ml-96'>
              <div> Contents of Option PDF TO JPEG </div>
              </div> 
      )}

{activeOption === 'option1' &&(
        <div className='bg-transparent justify-center mt-32 ml-96'>
              <div> Contents of Option JPEG TO PDF </div>
              </div> 
      )}

{activeOption === 'option2' &&(
        <div className='bg-transparent justify-center mt-32 ml-96'>
              <div> Contents of Option PDF TO PNG </div>
              </div> 
      )}

{activeOption === 'option3' &&(
        <div className='bg-transparent justify-center mt-32 ml-96'>
              <div> Contents of Option PNG TO PDF </div>
              </div> 
      )}

{activeOption === 'option4' &&(
        <div className='bg-transparent justify-center mt-32 ml-96'>
              <div> Contents of Option Image to Excel Sheet </div>
              </div> 
      )}

{activeOption === 'option5' &&(
        <div className='bg-transparent justify-center mt-32 ml-96'>
              <div> Contents of Option Excel Sheet to Image </div>
              </div> 
      )}

{activeOption === 'option6' &&(
        <div className='bg-transparent justify-center mt-32 ml-96'>
              <div> Contents of Option Image Compression </div>
              </div> 
      )}

{activeOption === 'option7' &&(
        <div className='bg-transparent justify-center mt-32 ml-96'>
              <div> Contents of Option PDF Compress </div>
              </div> 
      )}

{activeOption === 'option8' &&(
        <div className='bg-transparent justify-center mt-32 ml-96'>
              <div> Contents of Option File Compression </div>
              </div> 
      )}

{activeOption === 'option9' &&(
        <div className='bg-transparent justify-center mt-32 ml-96'>
              <div> Contents of Option Excel Sitemap </div>
              </div> 
      )}
          {activeOption === 'option10' &&(
        <div className='bg-transparent justify-center mt-32 ml-96'>
              <div> Contents of Other Extension Converter! </div>
              </div> 
      )}
      </div>
       
    </HelmetProvider>
  );
};

export default Converter;

