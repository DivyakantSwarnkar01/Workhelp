import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PostDetails from './Home/Postdetails'; // Import the PostDetails component

const firebaseConfig = {
    apiKey: "AIzaSyAw7s53wOvlN_HKZDOc_5CiiDHDKwd5DJI",
    authDomain: "workhelper-261bf.firebaseapp.com",
    projectId: "workhelper-261bf",
    storageBucket: "workhelper-261bf.appspot.com",
    messagingSenderId: "359079196777",
    appId: "1:359079196777:web:c0f8603146e3e0ec724af8",
    measurementId: "G-YYEWCSKBRM"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, 'Blogs_Contents');
        const postsSnapshot = await getDocs(postsCollection);
        const postData = [];
        postsSnapshot.forEach((postDoc) => {
          postData.push({ id: postDoc.id, ...postDoc.data() });
        });
        setPosts(postData);
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <div className='box-border relative bg-lime-500 w-full h-36'>   
       <ul className='flex flex-row absolute bottom-0 '>
        <li className='flex row-auto'><button className= ' font-mono justify-center box-border h-12 w-24 z-10 bg-lime-700 font-bold text-violet-950'> Hello !!!</button></li>
        <li className='flex row-auto'><button className= ' font-mono justify-center box-border h-12 w-24 z-10 bg-lime-700 font-bold text-violet-950'> Recent </button></li>
        <li className='flex row-auto'><button className= ' font-mono justify-center box-border h-12 w-24 z-10 bg-lime-700 font-bold text-violet-950'> New blogs</button></li>
        <li className='flex row-auto'><button className= ' font-mono justify-center box-border h-12 w-24 z-10 bg-lime-700 font-bold text-violet-950'> Quaries?</button></li>
        <li className='flex row-auto'><button className= ' font-mono justify-center box-border h-12 w-24 z-10 bg-lime-700 font-bold text-violet-950'> Search </button></li>
        <li className='flex row-auto'><Link className= " font-mono justify-center box-border pl-3 pt-3 h-12 w-36 z-10 bg-lime-700 font-bold" to="/LogSign/Log_Sign">   Authenticate </Link> </li>
        </ul> 
      </div>
      <div>
  {posts.map(post => (
    <div key={post.id} className="border p-4 mb-4">
      <Link to={`/posts/${post.id}`}>
        <h2 className="text-xl font-bold">{post.title || 'Untitled'}</h2> {/* Ensure title exists */}
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div> {/* Render content as HTML */}
      </Link>
      <p>Timestamp: {post.timestamp && new Date(post.timestamp.seconds * 1000).toString()}</p> {/* Convert timestamp to Date object and display */}
    </div>
  ))}
</div>
      <Routes>
        <Route path="/posts/:postId" element={<PostDetails />} /> {/* Route for individual post */}
      </Routes>
    </div>
  );
};

export default Home;
