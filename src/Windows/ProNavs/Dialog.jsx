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
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop your file here, or click to select</p>
      </div>
      <button className="bg-red-500" onClick={handleUpload}>Upload</button>
      {progress > 0 && <p className="bg-green-500">Upload progress: {progress}%</p>}
      {url && <p>File URL: {url}</p>}
    </div>
  );
};

export default Dialog;

