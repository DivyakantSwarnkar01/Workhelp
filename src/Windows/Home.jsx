import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs, orderBy, limit, startAfter } from 'firebase/firestore';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ExtractText from './Home/ExtractText';
import NaviHome from './Home/naviHome';
import LazyRGHS from './Home/lazyrghs';
import SubHeader from './Home/SubHeader';
import Pagination from './Home/HomeSub/Pagination';
import { db } from '../Model/DbCon';
import ProductsCarousel from '../components/Additionals/ProductsCarousel.jsx'
import TrendingProducts from './Home/TrendingProducts.jsx'
import ProductNewsHindi from './Home/ProductNewsHindi.jsx';
import TrendsTopic from './Home/TrendsTopic.jsx';
import ProductCateg from './Home/ProductCateg.jsx';
import { HelmetProvider } from "react-helmet-async";



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

    <div>
           <div>    <HelmetProvider>
            <link rel="canonical" href={`https://www.workhelper.shop/`}/>
            <title> Hello ! Welcome to Workhelper General Purpose utility workplace!!!</title>
            <meta name="description" content="This is General purpose website meant to serve the people add free Products Free of Cost" />
            
            </HelmetProvider>
             </div>
    

    <div className='bg-white'>
      <div>
        <SubHeader/>
      </div>

      <div className='w-auto h-auto  mt-3 ml-3 mr-3 p-4 mb-4 rounded-lg shadow-md border-4 border-indigo-200 border-b-indigo-400'>
        <NaviHome/>
      </div>
      <div className='w-3/5 bg-stone-500 text-white font-bold text-lg ml-5 mt-5 h-auto'> <p className='ml-3'> All News: </p>  </div>
       <div className="flex mb-5">
          <div className="w-3/5 bg-white  ml-5 mt-5">
            {posts.map(post => (
                <div key={post.id} className="p-4 mb-4 rounded-lg shadow-md hover:shadow-xl border-y-teal-500 border-2">
                  <div onClick={() => handlePostClick(post.id)}>
                    <h2 className="text-xl font-bold mb-2" dangerouslySetInnerHTML={ {__html: post.title || 'Untitled'}} />
                </div>
                 <div>
                    <div dangerouslySetInnerHTML={{__html: `${post.content.slice(0, 200)}...`}} />
                    {/* Additional details or content for the selected post */}
                    {/* Display createdAt date and time as a string */}
                    <p  className="font-serif font-bold text-slate-400 justify-center" dangerouslySetInnerHTML={{__html: post.WriterName || 'Unknown'}} ></p>
                    <p className="text-sm text-gray-400">
                      Date: {new Date(post.createdAt.seconds * 1000).toLocaleString()}
                    </p>  
                    {/* Add the Link component here */}
                    <Link to={`/post/${post.id}`} className="text-blue-500">Read more..</Link>
                  </div>
               </div>
            ))}
              {/* Pass props to Pagination component */}
              <div className='mb-5'>
              <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
              </div>
          </div>
        
            <div>
            <LazyRGHS/>
            <TrendingProducts/>
            <ProductNewsHindi/>
            <TrendsTopic/>
            </div>

            
            

        </div>
    <div>
      <div className='w-3/5 bg-stone-500 text-white font-semibold text-lg ml-5 mt-5 h-auto'> <p className='ml-3'> Products: </p></div>
      <ProductsCarousel/>
    </div>
    <div className='w-3/5 bg-stone-500 text-white font-semibold text-lg ml-5 mt-5 h-auto'> <p className='ml-3'> Products' Category : </p></div>
      <ProductCateg/>
    </div>


   <div>
    
   </div>
  </div>

  );
};

export default Home;
