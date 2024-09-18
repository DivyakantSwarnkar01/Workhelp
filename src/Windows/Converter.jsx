import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import TokenRequest from './Converter/TokenRequest';

const Converter = () => {
  const [activeOption, setActiveOption] = useState('option3');

  const handleClickOptions = (option) => {
    setActiveOption(option);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="canonical" href='https://www.workhelper.shop/Converter' />
        <title>File Converter-Workhelper</title>
        <meta name="description" content="Easily convert files with Workhelper's free file converter. Convert PDF to JPEG, JPEG to PDF, PDF to PNG, and even image files to Excel sheets. Fast, secure, and user-friendly. Try it now!" />
      </Helmet>
      <div className='bg-lime-500 py-4'>
        <div className='max-w-4xl mx-auto px-4'>
          <h1 className='text-2xl font-bold text-center text-white mb-6'>File Converter</h1>
          <div className='flex flex-wrap justify-center gap-4 mb-8'>
            <button
              className={`px-4 py-2 text-white font-bold rounded-md focus:outline-none transition-transform transform hover:scale-105 ${
                activeOption === 'option0' ? 'bg-indigo-600' : 'bg-indigo-500'
              }`}
              onClick={() => handleClickOptions('option0')}
            >
              PDF To JPEG
            </button>
            <button
              className={`px-4 py-2 text-white font-bold rounded-md focus:outline-none transition-transform transform hover:scale-105 ${
                activeOption === 'option1' ? 'bg-indigo-600' : 'bg-indigo-500'
              }`}
              onClick={() => handleClickOptions('option1')}
            >
              JPEG to PDF
            </button>
            <button
              className={`px-4 py-2 text-white font-bold rounded-md focus:outline-none transition-transform transform hover:scale-105 ${
                activeOption === 'option2' ? 'bg-indigo-600' : 'bg-indigo-500'
              }`}
              onClick={() => handleClickOptions('option2')}
            >
              PDF to PNG
            </button>
            <button
              className={`px-4 py-2 text-white font-bold rounded-md focus:outline-none transition-transform transform hover:scale-105 ${
                activeOption === 'option3' ? 'bg-indigo-600' : 'bg-indigo-500'
              }`}
              onClick={() => handleClickOptions('option3')}
            >
              PNG to PDF
            </button>
            <button
              className={`px-4 py-2 text-white font-bold rounded-md focus:outline-none transition-transform transform hover:scale-105 ${
                activeOption === 'option4' ? 'bg-indigo-600' : 'bg-indigo-500'
              }`}
              onClick={() => handleClickOptions('option4')}
            >
              Image to Excel Sheet
            </button>
            <button
              className={`px-4 py-2 text-white font-bold rounded-md focus:outline-none transition-transform transform hover:scale-105 ${
                activeOption === 'option5' ? 'bg-indigo-600' : 'bg-indigo-500'
              }`}
              onClick={() => handleClickOptions('option5')}
            >
              Excel sheet to Image
            </button>
            <button
              className={`px-4 py-2 text-white font-bold rounded-md focus:outline-none transition-transform transform hover:scale-105 ${
                activeOption === 'option6' ? 'bg-indigo-600' : 'bg-indigo-500'
              }`}
              onClick={() => handleClickOptions('option6')}
            >
              Photo Compress
            </button>
            <button
              className={`px-4 py-2 text-white font-bold rounded-md focus:outline-none transition-transform transform hover:scale-105 ${
                activeOption === 'option7' ? 'bg-indigo-600' : 'bg-indigo-500'
              }`}
              onClick={() => handleClickOptions('option7')}
            >
              PDF Compress
            </button>
            <button
              className={`px-4 py-2 text-white font-bold rounded-md focus:outline-none transition-transform transform hover:scale-105 ${
                activeOption === 'option8' ? 'bg-indigo-600' : 'bg-indigo-500'
              }`}
              onClick={() => handleClickOptions('option8')}
            >
              File Compress
            </button>
            <button
              className={`px-4 py-2 text-white font-bold rounded-md focus:outline-none transition-transform transform hover:scale-105 ${
                activeOption === 'option9' ? 'bg-indigo-600' : 'bg-indigo-500'
              }`}
              onClick={() => handleClickOptions('option9')}
            >
              Excel Sitemap
            </button>
            <button
              className={`px-4 py-2 text-white font-bold rounded-md focus:outline-none transition-transform transform hover:scale-105 ${
                activeOption === 'option10' ? 'bg-indigo-600' : 'bg-indigo-500'
              }`}
              onClick={() => handleClickOptions('option10')}
            >
              Other Extension Convert
            </button>
          </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
                {activeOption === 'option1' && <TokenRequest targetFormat="PDF" inputType="image/jpeg" heading="Convert JPEG to PDF" />}
                {activeOption === 'option0' && <TokenRequest targetFormat="JPEG" inputType="application/pdf" heading="Convert PDF to JPEG" />}
                {activeOption === 'option2' && <TokenRequest targetFormat="PNG" inputType="application/pdf" heading="Convert PDF to PNG" />}
                {activeOption === 'option3' && <TokenRequest targetFormat="PDF" inputType="image/png" heading="Convert PNG to PDF" />}
                {activeOption === 'option4' && <TokenRequest targetFormat="Excel" inputType="image/*" heading="Convert Image to Excel" />}
                {activeOption === 'option5' && <TokenRequest targetFormat="Image" inputType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" heading="Convert Excel to Image" />}
                {activeOption === 'option6' && <TokenRequest targetFormat="Compressed" inputType="image/*" heading="Compress Image" />}
                {activeOption === 'option7' && <TokenRequest targetFormat="PDF" inputType="application/pdf" heading="Compress PDF" />}
                {activeOption === 'option8' && <TokenRequest targetFormat="Compressed" inputType="*" heading="Compress File" />}
                {activeOption === 'option9' && <TokenRequest targetFormat="Excel" inputType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" heading="Create Excel Sitemap" />}
                {activeOption === 'option10' && <TokenRequest targetFormat="Other" inputType="*" heading="Convert Other File Types" />}
            </div>


        </div>
      </div>
    </HelmetProvider>
  );
};

export default Converter;
