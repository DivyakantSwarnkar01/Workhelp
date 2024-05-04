import { Helmet, HelmetProvider } from 'react-helmet-async';

const Converter = () => {
 



  return (
    <HelmetProvider><Helmet> <link rel="canonical" href='https://www.workhelper.shop/Converter'/>
     </Helmet>
    <div className='box-border bg-lime-500 border-t-0 w-full h-36'>
    </div>
    <div className=' border-2 border-dashed border-cyan-500 h-96 w-auto m-6'>
      <div className='flex'>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-0 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20">
               PDF To JPEG
             </button>
         </div>   
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20">
               JPEG to PDF
             </button>
         </div>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20">
               PDF to PNG
             </button>
         </div>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20">
               PNG to PDF
             </button>
         </div>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20">
               Image to Excel Sheet
             </button>
         </div>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20">
               Excel sheet to Image
             </button>
         </div> 
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20">
               Photo Compress
             </button>
         </div>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20">
               PDF Compress
             </button>
         </div>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20">
               File Compress
             </button>
         </div>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20">
               Excel Sitemap
             </button>
         </div>
         <div className='flex-row rounded-md'>
             <button className="bg-indigo-500 ml-2 mt-2  bg-rosy hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-white font-bold py-2 px-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 z-20">
              Other Extension Convert
             </button>
         </div>
      </div>
      <div className='bg-transparent justify-center mt-32 ml-96'>
        All File Conversion tool will appear here !!!
      </div>
    </div>    
    </HelmetProvider>
  );
};

export default Converter;

