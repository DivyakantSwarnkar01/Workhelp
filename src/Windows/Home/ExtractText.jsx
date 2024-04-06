import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import DOMPurify from 'dompurify'; // Import DOMPurify

const firebaseConfig = {
  apiKey: "AIzaSyAw7s53wOvlN_HKZDOc_5CiiDHDKwd5DJI",
  authDomain: "workhelper-261bf.firebaseapp.com",
  projectId: "workhelper-261bf",
  storageBucket: "workhelper-261bf.appspot.com",
  messagingSenderId: "359079196777",
  appId: "1:359079196777:web:c0f8603146e3e0ec724af8",
  measurementId: "G-YYEWCSKBRM"
};
// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

const ExtractText = ({ postId }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchText = async () => {
      try {
        const db = getFirestore(firebaseApp);
        const postDoc = doc(db, 'Blogs_Contents', postId);
        const docSnap = await getDoc(postDoc);
        if (docSnap.exists()) {
          const textWithTags = docSnap.data().content;
          const sanitizedHtml = DOMPurify.sanitize(textWithTags);
          setText(sanitizedHtml);

          const wordsArray = sanitizedHtml.split(' ');
          let firstFewWords = wordsArray.slice(0, 20).join(' ');
          if (wordsArray.length > 20) {
            firstFewWords += '...';
          }
          setText(firstFewWords);
        } else {
          setText('Post not found.');
        }
      } catch (error) {
        console.error("Error getting document:", error);
        setText('Error fetching text.');
      }
    };

    fetchText();
  }, [postId]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default ExtractText;