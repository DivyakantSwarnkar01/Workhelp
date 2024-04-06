// Postdetails.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import firebase from '../LogSign/fbcon';

const Postdetails = () => {
  const { postId } = useParams(); // Use "postId" instead of "id"
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postDoc = doc(firebase.firestore, 'Blogs_Contents', postId); // Use "postId" here
        const docSnap = await getDoc(postDoc);
        if (docSnap.exists()) {
          setPost({ id: docSnap.id, content: docSnap.data().content });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, [postId]); // Make sure to include "postId" in the dependency array

  if (!post) return null;

  // Render the QuillJS content
  return (
    <div>
      <h1>Full Article</h1>
      {/* Render the QuillJS content as HTML */}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default Postdetails;
