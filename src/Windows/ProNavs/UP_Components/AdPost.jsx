import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill styles
import { usePostStore } from './PostStore';

const AdPost = () => {
  const quillRef = useRef(null);
  const { postToFirestore, handleTitleChange } = usePostStore();

  useEffect(() => {
    if (!quillRef.current) return;

    const quillInstance = new Quill(quillRef.current, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'color': [] }, { 'background': [] }],
          ['link', 'image', 'formula', 'table'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],
          [{ 'align': [] }],
          ['clean']
        ]
      }
    });

    quillInstance.on('text-change', () => {
      // Do something with the content if needed
      const quillContent = quillInstance.root.innerHTML.trim();
      // Set the title to be the same as the content
      handleTitleChange(quillContent);
    });

    return () => {
      quillInstance.off('text-change');
    };
  }, []);

  const handlePost = () => {
    // Access Quill editor content
    const quillContent = quillRef.current.firstChild.innerHTML.trim();
      handleTitleChange(quillContent);
    // Pass content and title to PostStore
     postToFirestore();
  };


  return (
    <div>
      <h1>Title*:</h1>
      <div ref={quillRef} style={{ maxHeight: '600px', maxWidth: '700px', minHeight: '300px' }} />
      <div className='flex mt-5 mb-5'>
        <button className="bg-green-400 hover:bg-green-700 mr-3 text-white font-bold py-2 px-4 border border-lime-700 rounded" onClick={handlePost}>Post</button>
        <button className="bg-red-500 hover:bg-red-800 ml-3 mr-3 text-white font-bold py-2 px-4 border border-lime-700 rounded">Reset</button>
      </div>
    </div>
  );
};

export default AdPost;
