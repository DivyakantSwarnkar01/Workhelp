import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useState } from 'react';
import TokenRequest from './Converter/TokenRequest';


const Converter = () => {
  const [activeOption, setActiveOption] = useState('option3');
  const [targetFormat, setTargetFormat] = useState(null);
  const [inputType, setInputType] = useState(null);
  const [heading, setHeading] = useState(null);

  const handleClickOptions = (option) => {
    setActiveOption(option);
    switch (option) {
      case 'option1':
        setTargetFormat('PDF');
        setInputType('image/jpeg');
        setHeading('Convert JPEG to PDF');
        break;
      case 'option0':
        setTargetFormat('JPEG');
        setInputType('application/pdf');
        setHeading('Convert PDF to JPEG');
        break;
      case 'option2':
        setTargetFormat('PNG');
        setInputType('application/pdf');
        setHeading('Convert PDF to PNG');
        break;
      case 'option3':
        setTargetFormat('PDF');
        setInputType('image/png');
        setHeading('Convert PNG to PDF');
        break;
      case 'option4':
        setTargetFormat('Excel');
        setInputType('image/*');
        setHeading('Convert Image to Excel');
        break;
      case 'option5':
        setTargetFormat('Image');
        setInputType('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        setHeading('Convert Excel to Image');
        break;
      case 'option6':
        setTargetFormat('Compressed');
        setInputType('image/*');
        setHeading('Compress Image');
        break;
      case 'option7':
        setTargetFormat('PDF');
        setInputType('application/pdf');
        setHeading('Compress PDF');
        break;
      case 'option8':
        setTargetFormat('Compressed');
        setInputType('*');
        setHeading('Compress File');
        break;
      case 'option9':
        setTargetFormat('Excel');
        setInputType('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        setHeading('Create Excel Sitemap');
        break;
      case 'option10':
        setTargetFormat('Other');
        setInputType('*');
        setHeading('Convert Other File Types');
        break;
      case 'option11':
        setTargetFormat('WEBP');
        setInputType('image/png');
        setHeading('Convert PNG to WebP');
        break;
      case 'option12':
        setTargetFormat('WEBP');
        setInputType('image/jpeg');
        setHeading('Convert JPEG to WebP');
        break;
      default:
        break;
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="canonical" href='https://www.workhelper.shop/Converter' />
        <title>Free, Easy & Fast File Converter: Convert to WebP, JPEG, PDF, PNG & more!</title>
        <meta name="description" content="Use our free, easy, and fast online file converter to seamlessly transform WebP, JPEG, PDF, PNG, and more. Secure, reliable, and user-friendly—convert your files instantly, including Image to PDF, PDF to Image, JPEG to WebP, and PNG to WebP. Start converting now and experience hassle-free file conversion" />
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
<button
  className={`px-4 py-2 text-white font-bold rounded-md focus:outline-none transition-transform transform hover:scale-105 ${
    activeOption === 'option11' ? 'bg-indigo-600' : 'bg-indigo-500'
  }`}
  onClick={() => handleClickOptions('option11')}
>
  PNG to WebP
</button>
<button
  className={`px-4 py-2 text-white font-bold rounded-md focus:outline-none transition-transform transform hover:scale-105 ${
    activeOption === 'option12' ? 'bg-indigo-600' : 'bg-indigo-500'
  }`}
  onClick={() => handleClickOptions('option12')}
>
  JPEG to WebP
</button>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            {activeOption && (
              <TokenRequest 
                targetFormat={targetFormat} 
                inputType={inputType} 
                heading={heading} 
                 
              />
            )}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Converter;