import React, { useState } from 'react';
import axios from 'axios';
import { storage } from '../../Model/DbCon';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import TokenRequestButton from './TokenRequestButton';

const TokenRequest = ({ targetFormat, inputType, heading }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [quality, setQuality] = useState(85);
  const [imageData, setImageData] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [error, setError] = useState(null);

  // Progress state for uploading file and decoding
  const [uploadProgress, setUploadProgress] = useState(0);
  const [decodeProgress, setDecodeProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setError(`Please select a file to convert.`);
      return;
    }

    const storageRef = ref(storage, `/Converter_Files/${selectedFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, selectedFile);

    // Reset decode progress on every new submission
    setDecodeProgress(0);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setUploadProgress(progress); // Set upload progress
      },
      (error) => {
        setError('Failed to upload file: ' + error.message);
        setUploadProgress(0);
      },
      async () => {
        // File upload complete, get the download URL
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);

        const requestBody = {
          image_url: downloadUrl,
          target_format: targetFormat,
          quality: quality,
        };

        try {
          // Simulate decoding progress
          const simulateDecodeProgress = () => {
            const intervalId = setInterval(() => {
              setDecodeProgress((prevProgress) => {
                const newProgress = prevProgress + 10;
                if (newProgress >= 100) {
                  clearInterval(intervalId);
                }
                return newProgress;
              });
            }, 500); // Progress increases every 500ms
          };

          const res = await axios.post(
            'https://2pij30jf87.execute-api.eu-north-1.amazonaws.com/Workhelper_init_deployment/file-process',
            requestBody,
            {
              headers: {
                Authorization: `Bearer 0f382b343f24439088783744d3340371`,
                'Content-Type': 'application/json',
              },
            }
          );

          let responseBody;
          try {
            responseBody = typeof res.data.body === 'string' ? JSON.parse(res.data.body) : res.data.body;
          } catch (parseError) {
            setError('Failed to parse response body.');
            return;
          }

          const { image_data } = responseBody;

          if (image_data) {
            const byteString = atob(image_data);
            const mimeType = 'application/pdf'; // Hardcoded PDF format
            const arrayBuffer = new ArrayBuffer(byteString.length);
            const intArray = new Uint8Array(arrayBuffer);
            for (let i = 0; i < byteString.length; i++) {
              intArray[i] = byteString.charCodeAt(i);
            }
            const blob = new Blob([arrayBuffer], { type: mimeType });

            const url = window.URL.createObjectURL(blob);
            setDownloadUrl(url);

            setImageData(`data:application/pdf;base64,${image_data}`);
          } else {
            setError('Image data is missing from the response.');
          }

          setError(null);
          simulateDecodeProgress(); // Start decoding progress bar
        } catch (err) {
          setError('Failed to make the request. ' + (err.response?.data?.body?.error || err.message));
          setImageData(null);
          setDownloadUrl(null);
        }
      }
    );
  };

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploadProgress(0); // Reset upload progress when a new file is selected
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h1 className="text-xl font-bold mb-4">{heading}</h1> {/* Dynamic Heading */}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Select File</label>
          <div className="mt-1 flex items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="file"
              accept={inputType}
              onChange={handleFileSelect}
              className="hidden" // Hide the actual input
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <UploadIcon className="w-8 h-8 text-indigo-600" />
              <p className="text-sm text-gray-500 mt-2">Click to upload</p>
              {selectedFile && <p className="text-sm text-indigo-500 mt-1">{selectedFile.name}</p>}
            </label>
          </div>

          {/* Upload Progress Bar */}
          {uploadProgress > 0 && (
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-indigo-600 h-2.5 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
              <p className="text-sm text-gray-600 mt-1">{uploadProgress}% uploaded</p>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Quality</label>
          <input
            type="number"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Submit Request
        </button>

        {/* Decode Progress Bar */}
        {decodeProgress > 0 && (
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${decodeProgress}%` }}
            ></div>
            <p className="text-sm text-gray-600 mt-1">{decodeProgress}% decoding</p>
          </div>
        )}
      </form>

      {imageData && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Converted File:</h2>
          <embed src={imageData} type="application/pdf" width="100%" height="400px" />
        </div>
      )}

      {downloadUrl && <TokenRequestButton downloadUrl={downloadUrl} fileExtension={targetFormat.toLowerCase()} />}

      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
          <h2 className="text-lg font-semibold">Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

// Custom SVG Icon for upload
const UploadIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 4v16m8-8H4"
    />
  </svg>
);

export default TokenRequest;
