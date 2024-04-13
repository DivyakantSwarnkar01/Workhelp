import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PostDetails from './Home/Postdetails'; // Import the PostDetails component
import ExtractText from './Home/ExtractText';
import NaviHome from './Home/naviHome';
import RGHS from './Home/rghs';
import SubHeader from './Home/SubHeader';
import Postdetails from './Home/Postdetails';



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
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const db = getFirestore();
        const postsCollection = collection(db, 'Blogs_Contents');
        const postsSnapshot = await getDocs(postsCollection);
        const postData = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(postData);
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (postId) => {
    setSelectedPostId(postId === selectedPostId ? null : postId);
  };


  // Pagination calculation
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;

// Ensure posts array is not empty before slicing
const currentPosts = posts.length > 0 ? posts.slice(indexOfFirstPost, indexOfLastPost) : [];

console.log('currentPage:', currentPage);
console.log('postsPerPage:', postsPerPage);
console.log('indexOfLastPost:', indexOfLastPost);
console.log('indexOfFirstPost:', indexOfFirstPost);
console.log('currentPosts:', currentPosts);

// Pagination buttons
const paginationButtons = Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => (
  <button key={i} onClick={() => paginate(i + 1)} className="mx-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
    {i + 1}
  </button>
));

// Define your pagination function
const paginate = (pageNumber) => {
  setCurrentPage(pageNumber); // Assuming you have a state variable for currentPage
}

console.log('paginationButtons:', paginationButtons);

  return (
    <div className='bg-zinc-200'>
      <div>
        <SubHeader/>
      </div>

      <div className='w-auto h-auto  mt-3 ml-3 mr-3 border p-4 mb-4 rounded-lg shadow-md'>
        <NaviHome/>
      </div>

      <div className="flex mb-5">
          <div className="w-3/4  ml-5 mt-5">
            {posts.map(post => (
                <div key={post.id} className="border p-4 mb-4 rounded-lg shadow-md hover:shadow-xl">
                  <div onClick={() => handlePostClick(post.id)}>
                    <h2 className="text-xl font-bold mb-2" dangerouslySetInnerHTML={{__html: post.title || 'Untitled'}} />
                     <div><ExtractText postId={post.id} /></div>
                     {/* Check if post.description exists before accessing it */}
                     {post.description && (
                      <p className="text-gray-600 mb-4">{post.description.slice(0, 20)}</p>
                    )}
                  </div>
                  {selectedPostId === post.id && (
                  <div>
                    <div dangerouslySetInnerHTML={{__html: post.content }} />
                    {/* Additional details or content for the selected post */}
                                 {/* Display createdAt date and time as a string */}
                      <p className="text-sm text-gray-400">
                        {post.createdAt.toDate().toLocaleString()} {/* Convert to JavaScript Date object and format */}
                      </p>
                     {/* Add the Link component here */}
                   <Link to={`/post/${post.id}`} className="text-blue-500">Read more..</Link>
                  </div>
              )}
               </div>
            ))}
               {/* Pagination */}
                   <div className="flex justify-center mt-8">{paginationButtons}</div>
          </div>
        
            <div>
            <RGHS/>
            </div>


        </div>
    </div>
  );
};

export default Home;
