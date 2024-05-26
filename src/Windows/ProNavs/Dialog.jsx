import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { storage } from "../LogSign/fbcon";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Dialog = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  const handleUpload = () => {
    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytes(storageRef, file);

    uploadTask.then((snapshot) => {
      // Get the download URL after upload completes
      getDownloadURL(snapshot.ref)
        .then((url) => {
          // Update the url state
          setUrl(url);
        })
        .catch((error) => {
          console.log("Error getting download URL:", error);
        });
    }).catch((error) => {
      console.log("Error uploading file:", error);
    });
  

  };

  return (
    <div className=" border-2 border-dashed border-red-400 p-40">
      <div {...getRootProps()}>
        <input {...getInputProps()} />


        <p>            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
            </svg>
          Drag and drop your file here, or click to select</p>
      </div>
      <button className="bg-red-500 rounded-md text-white p-2 mt-5" onClick={handleUpload}>Upload</button>
      {progress > 0 && <p className="bg-green-500">Upload progress: {progress}%</p>}
      {url && <p>File URL: {url}</p>}
    </div>
  );
};

export default Dialog;

