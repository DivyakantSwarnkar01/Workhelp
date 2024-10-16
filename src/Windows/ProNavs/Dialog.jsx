import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { storage } from "../LogSign/fbcon";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Dialog = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  const handleUpload = () => {
    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    setIsUploading(true); // Set uploading state to true

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progressPercent);
      },
      (error) => {
        console.error("Error uploading file:", error);
        setIsUploading(false); // Reset uploading state
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            setUrl(url);
            setIsUploading(false); // Reset uploading state
          })
          .catch((error) => {
            console.error("Error getting download URL:", error);
            setIsUploading(false); // Reset uploading state
          });
      }
    );
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!"); // Feedback message
  };

  return (
    <div className="border-2 border-dashed border-lime-500 p-4 rounded-lg bg-white shadow-lg w-full">
      <div
        {...getRootProps()}
        className="flex flex-col items-center justify-center border-2 border-dashed border-lime-300 rounded-lg p-5 mb-4 hover:bg-lime-50 transition duration-200"
      >
        <input {...getInputProps()} />
        <p className="text-gray-700 text-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 mb-2 text-lime-600"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
              clipRule="evenodd"
            />
          </svg>
          Drag and drop your file here, or click to select
        </p>
      </div>
      <button
        className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-1 px-3 rounded transition duration-200 flex items-center justify-center"
        onClick={handleUpload}
      >
        <i className="fa fa-upload mr-2"></i>
        Upload
      </button>
      {isUploading && (
        <div className="flex items-center mt-2">
          <i className="fa fa-spinner fa-spin text-lime-600 mr-2"></i>
          <span className="text-gray-600 text-sm">Uploading...</span>
        </div>
      )}
      {progress > 0 && (
        <div className="mt-2">
          <div className="bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-lime-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-600 text-sm mt-1">Upload progress: {progress}%</p>
        </div>
      )}
      {url && (
        <div className="mt-2">
          <p className="text-gray-700">File URL:</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-600 underline"
          >
            {url}
          </a>
          <button
            className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-1 px-3 rounded transition duration-200 mt-2 ml-2 flex items-center"
            onClick={handleCopyLink}
          >
            <i className="fa fa-copy mr-2"></i> {/* Copy icon */}
            Copy Link
          </button>
        </div>
      )}
    </div>
  );
};

export default Dialog;
