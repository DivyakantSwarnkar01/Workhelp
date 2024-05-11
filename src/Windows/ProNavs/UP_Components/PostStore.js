import { useState, useContext } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firebase from '../../LogSign/fbcon';
import { FormDataContext } from './FormDataContext';

export const usePostStore = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const { formData } = useContext(FormDataContext) || {}; // Destructuring with default empty object

  const postToFirestore = async (postTitle, postContent) => {
    try {
      const docData = {
        title: postTitle,
        content: postContent,
        createdAt: serverTimestamp(),
      };

      // Add formData to the document if option1 exists
      if (formData && formData.option1) {
        const { option1 } = formData;
        for (const key in option1) {
          docData[key] = option1[key];
        }
      }

      const docRef = await addDoc(collection(firebase.firestore, 'Blogs_Contents'), docData);

      console.log('Document written with ID: ', docRef.id);
      // Trigger a custom event or function
      const event = new CustomEvent('documentWritten', { detail: docRef.id });
      window.dispatchEvent(event);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return {
    postTitle,
    setPostTitle,
    postContent,
    setPostContent,
    postToFirestore
  };
};

export default usePostStore;
