import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs, orderBy, limit, startAfter } from 'firebase/firestore';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ExtractText from './Home/ExtractText';
import NaviHome from './Home/naviHome';
import RGHS from './Home/rghs';
import SubHeader from './Home/SubHeader';
import Pagination from './Home/HomeSub/Pagination';

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
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, 'Blogs_Contents');
        const q = query(postsCollection, orderBy("createdAt", "desc"), limit(postsPerPage));
        const postsSnapshot = await getDocs(q);
        const postData = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(postData);

        // Get total number of pages
        const totalPostsSnapshot = await getDocs(collection(db, 'Blogs_Contents'));
        const totalPosts = totalPostsSnapshot.size;
        const totalPages = Math.ceil(totalPosts / postsPerPage);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    };

    fetchPosts();
  }, [db, postsPerPage]);

  const handlePageChange = async (page) => {
    try {
      let q;
      const postsCollection = collection(db, 'Blogs_Contents');
      if (page === 1) {
        q = query(
          postsCollection,
          orderBy("createdAt", "desc"),
          limit(postsPerPage)
        );
      } else {
        q = query(
          postsCollection,
          orderBy("createdAt", "desc"),
          startAfter(posts[posts.length - 1].createdAt),
          limit(postsPerPage)
        );
      }
      const postsSnapshot = await getDocs(q);
      const postData = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postData);
      setCurrentPage(page);
    } catch (error) {
      console.error("Error getting documents:", error);
    }
  };
  
  
  const handlePostClick = (postId) => {
    // Handle post click logic here
  };

  return (
    <div className='bg-zinc-200'>
      <div>
        <SubHeader/>
      </div>

      <div className='w-auto h-auto  mt-3 ml-3 mr-3 border p-4 mb-4 rounded-lg shadow-md'>
        <NaviHome/>
      </div>

      <div className="flex mb-5">
          <div className="w-3/5 bg-white  ml-5 mt-5">
            {posts.map(post => (
                <div key={post.id} className="border p-4 mb-4 rounded-lg shadow-md hover:shadow-xl">
                  <div onClick={() => handlePostClick(post.id)}>
                    <h2 className="text-xl font-bold mb-2" dangerouslySetInnerHTML={{__html: post.title || 'Untitled'}} />
                     
                  </div>
                  <div>
                    <div dangerouslySetInnerHTML={{__html: `${post.content.slice(0, 100)}...`}} />
                    {/* Additional details or content for the selected post */}
                    {/* Display createdAt date and time as a string */}
                    <p className="text-sm text-gray-400">
                      CreatedAt: {new Date(post.createdAt.seconds * 1000).toLocaleString()} {/* Convert to JavaScript Date object and format */}
                    </p>
                    {/* Add the Link component here */}
                    <Link to={`/post/${post.id}`} className="text-blue-500">Read more..</Link>
                  </div>
               </div>
            ))}
              {/* Pass props to Pagination component */}
              <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
          </div>
        
            <div>
            <RGHS/>
            </div>


        </div>
    </div>
  );
};

export default Home;
