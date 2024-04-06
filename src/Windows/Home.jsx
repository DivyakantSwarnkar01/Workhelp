import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs } from 'firebase/firestore';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PostDetails from './Home/Postdetails'; // Import the PostDetails component
import ExtractText from './Home/ExtractText';




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
      <div className="flex justify-between">
      <div className="w-2/4 ml-5 mt-5">
      {posts.map(post => (
  <div key={post.id} className="border p-4 mb-4 rounded-lg shadow-md hover:shadow-xl">
    <div onClick={() => handlePostClick(post.id)}>
      <h2 className="text-xl font-bold mb-2">{post.title || 'Untitled'}</h2>
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
      </div>
    )}
  </div>
))}



        {/* Pagination */}
        <div className="flex justify-center mt-8">{paginationButtons}</div>
        
      </div>
      <div className="w-1/4 flex flex-col mt-10 ml-2">
        <div className="bg-green-600 p-4 mb-4 rounded-md hover:shadow-lg">
          <h2 className="text-lg font-bold text-green-800 mb-4">Heading 1</h2>
          <div className='bg-green-200'><p>Content 1</p></div>
        </div>
        <div className="bg-green-600 p-4 rounded-md hover:shadow-lg">
          <h2 className="text-lg font-bold text-green-800 mb-4">Heading 2</h2>
          <div className='bg-green-200'><p>Content 2</p></div>
        </div>
      </div>
      <Routes>
        <Route path="/posts/:postId" element={<PostDetails />} />
      </Routes>
    </div>
    </div>
  );
};

export default Home;
