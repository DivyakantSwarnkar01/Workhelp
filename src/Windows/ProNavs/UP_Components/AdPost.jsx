import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill styles
import { usePostStore } from './PostStore';



let quillTitle = '';

const AdPost = () => {
  const quillRef = useRef(null);
  const { postToFirestore, handleTitleChange, postContent, postTitle } = usePostStore();

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
        quillTitle  = quillInstance.root.innerHTML.trim();
        
      // Do something with the content if needed
     /* const quillContent = quillInstance.root.innerHTML.trim();
      // Set the title to be the same as the content
      handleTitleChange(quillContent);
      const quillContent = quillInstance.root.innerHTML.trim();*/
    });

    return () => {
      quillInstance.off('text-change');
    };
  }, []);

 /*const handlePost2 = () => {
    // Access Quill editor content
    
    // Pass content and title to PostStore
      
  };*/


  return (
    <div>
      <h1>Title*:</h1>
      <div ref={quillRef} style={{ maxHeight: '600px', maxWidth: '700px', minHeight: '300px' }} />
    </div>
  );
};

export default AdPost;

export { quillTitle }