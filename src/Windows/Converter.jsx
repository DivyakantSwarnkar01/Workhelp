import React, { useState } from 'react';

const Converter = () => {
  const [imageSrc, setImageSrc] = useState('');

  const handleFileChange = async (event) => {
    try {
      const url = 'http://127.0.0.1:8000/convert/pdf-to-image/'; // Specify the URL of your FastAPI server
      const pdfFile = event.target.files[0]; // Get the uploaded PDF file

      // Create a FormData object to store the file
      const formData = new FormData();
      formData.append('file', pdfFile);

      // Send a POST request with the PDF file as form data
      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });

      // Check if the request was successful
      if (response.ok) {
        // Parse the JSON response
        const data = await response.json();
        // Assuming data.images is an array of image URLs, set the first image as the source
        if (data.images && data.images.length > 0) {
          setImageSrc(data.images[0]);
        } else {
          throw new Error('No images found in response');
        }
      } else {
        throw new Error('Failed to convert PDF to images');
      }
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    }
  };

  return (
    <div className='box-border bg-lime-500 border-t-0 w-full h-36'>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {imageSrc && (
        <div>
          <img src={imageSrc} alt="Converted PDF page" />
        </div>
      )}
    </div>
  );
};

export default Converter;

