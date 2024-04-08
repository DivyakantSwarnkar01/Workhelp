import React, { useState, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Import Quill styles
import firebase from '../../LogSign/fbcon'; // Import firebase from fbcon.js
import { collection, doc, addDoc, serverTimestamp } from 'firebase/firestore';


const AdPost = () => {
  const [editorValue, setEditorValue] = useState('');
  const quillRef = useRef(null);

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
      setEditorValue(quillInstance.root.innerHTML);
    });

    return () => {
      quillInstance.off('text-change');
    };
  }, []);

  const postToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(firebase.firestore, 'Blogs_Contents'), {
        content: editorValue,
        createdAt: serverTimestamp()
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  

  return (
    <div>
      <h1>Title*:</h1>
      <div ref={quillRef} style={{ maxHeight: '600px', maxWidth: '700px', minHeight: '300px' }} />
      <div className='flex mt-5 mb-5'>
      <button className="bg-green-400 hover:bg-green-700 mr-3 text-white font-bold py-2 px-4 border border-lime-700 rounded" onClick={postToFirestore}>Post</button>
      <button className="bg-red-500 hover:bg-red-800 ml-3 mr-3 text-white font-bold py-2 px-4 border border-lime-700 rounded" onClick={postToFirestore}>Reset</button>
      </div>
    </div>
  );
};

export default AdPost;
