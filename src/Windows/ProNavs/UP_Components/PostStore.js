import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firebase from '../../LogSign/fbcon'; // Import firebase from fbcon.js

export const usePostStore = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  /*const handleTitleChange = (postTitle) => {
    setPostTitle(postTitle);
  };*/


 /* const handleContentChange = (content) => {
    setPostContent(content);
    postToFirestore();
  };
*/

  const postToFirestore = async (postTitle, postContent) => {
    try {
      const docRef = await addDoc(collection(firebase.firestore, 'Blogs_Contents'), {
        title: postTitle,
        content: postContent,
        createdAt: serverTimestamp()
      });
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
    postContent,
    //handleTitleChange,
    //handleContentChange,
    postToFirestore
  };
};

export default usePostStore;
