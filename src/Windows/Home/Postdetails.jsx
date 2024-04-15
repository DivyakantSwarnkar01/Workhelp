// Postdetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import firebase from '../LogSign/fbcon';
import Social from './Social';
import MetaTags from '../../Helmet/MetaTags';
import { HelmetProvider } from 'react-helmet-async';



const Postdetails = () => {
  const { postId } = useParams(); // Use "postId" instead of "id"
  const [post, setPost] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const canonURL = 'https://workhelper.shop' + location.pathname ;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postDoc = doc(firebase.firestore, 'Blogs_Contents', postId);
        const docSnap = await getDoc(postDoc);
        if (docSnap.exists()) {
          setPost({ id: docSnap.id, title: docSnap.data().title, content: docSnap.data().content,
            createdAt: docSnap.data().createdAt });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
  
    fetchPost();
  
    // Logic to apply dark mode theme
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [postId, isDarkMode]); // Include "postId" and "isDarkMode" in the dependency array
  // Make sure to include "postId" in the dependency array

  if (!post) return null;

  // Render the QuillJS content
  return (<HelmetProvider>

<div className="flex justify-center items-center min-h-screen bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200">

      <MetaTags title={post.title}
              description={post.content}
              imageUrl={post.thumbnail}
              canonicalUrl= {canonURL}/>


    <div className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10 mt-10 mb-10">
      <div className="flex justify-between items-center mb-4">
        <label htmlFor="toggle" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              id="toggle"
              type="checkbox"
              className="hidden"
              onChange={() => setIsDarkMode(!isDarkMode)}
              checked={isDarkMode}
            />
            <div className="toggle__line w-10 h-4 bg-gray-400 dark:bg-gray-600 rounded-full shadow-inner"></div>
            <div className={`toggle__dot absolute w-6 h-6 bg-white dark:bg-gray-800 border-2 border-pink-500 dark:border-violet-500 rounded-full shadow top-0 -left-1 transition-transform duration-300 ease-in-out transform ${isDarkMode ? 'translate-x-6' : ''}`}></div>
          </div>
        </label>
      </div>

      <div className="text-gray-800 dark:text-gray-200">
       {/* Display createdAt date and time as a string */}
       <p className="text-sm text-blue-400">
              {post.createdAt.toDate().toLocaleString()} {/* Convert to JavaScript Date object and format */}
            </p>
        <h1 className="text-3xl font-bold mb-4" dangerouslySetInnerHTML={{__html: post.title}}/>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      {post && <Social url={window.location.href} title={post.title} />}
    </div>
</div>
</HelmetProvider>
  );
};

export default Postdetails;
