import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, orderBy, limit, startAfter } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import ExtractText from './Home/ExtractText';
import NaviHome from './Home/naviHome';
import LazyRGHS from './Home/lazyrghs.jsx';
import SubHeader from './Home/SubHeader';
import Pagination from './Home/HomeSub/Pagination';
import { db } from '../Model/DbCon';
import ProductsCarousel from '../components/Additionals/ProductsCarousel.jsx';
import TrendingProducts from './Home/TrendingProducts.jsx';
import ProductNewsHindi from './Home/ProductNewsHindi.jsx';
import TrendsTopic from './Home/TrendsTopic.jsx';
import ProductCateg from './Home/ProductCateg.jsx';
import { HelmetProvider } from "react-helmet-async";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true); // State to manage loading

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
        setLoading(false);
      } catch (error) {
        console.error("Error getting documents:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [db, postsPerPage]);

  const handlePageChange = async (page) => {
    try {
      setLoading(true);
      let q;
      const postsCollection = collection(db, 'Blogs_Contents');
      if (page === 1) {
        q = query(postsCollection, orderBy("createdAt", "desc"), limit(postsPerPage));
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
      setLoading(false);
    } catch (error) {
      console.error("Error getting documents:", error);
      setLoading(false);
    }
  };

  const handlePostClick = (postId) => {
    // Handle post click logic here, e.g., navigation or modal
  };

  return (
    <HelmetProvider>
      <div>
        <link rel="canonical" href="https://www.workhelper.shop/" />
        <title>Welcome to Workhelper! A General Purpose Utility Website</title>
        <meta name="description" content="A general-purpose website providing free services and ad-free products." />

        {/* Main Wrapper */}
        <div className='bg-gray-100 min-h-screen'>
          {/* Subheader */}
          <SubHeader />

          {/* Navigation */}
          <NaviHome />

          {/* News Section Header */}
          <div className="w-full lg:w-3/5 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-extrabold text-lg ml-5 mt-8 py-3 px-5 rounded-lg shadow-lg flex items-center">
            <i className="fas fa-newspaper text-yellow-300 mr-2 animate__animated animate__fadeIn"></i>
            <p>All News:</p>
          </div>

          <div className="flex flex-col lg:flex-row mt-5 space-y-6 lg:space-y-0 lg:space-x-6">
            {/* Posts Section */}
            <div className="w-full lg:w-3/5 bg-white ml-5 mt-5 rounded-lg shadow-lg p-6">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-teal-500 border-b-4 border-gray-200"></div>
                </div>
              ) : (
                posts.map(post => (
                  <div key={post.id} className="p-6 mb-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-teal-500 hover:border-teal-700 transform hover:scale-105">
                  <div onClick={() => handlePostClick(post.id)} className="cursor-pointer">
                    <h2 className="text-2xl font-bold mb-2 text-teal-600 hover:text-teal-800 transition-colors duration-300">
                      <i className="fas fa-newspaper text-teal-400 mr-2"></i>
                      {/* Strip HTML tags from the title */}
                      {post.title ? post.title.replace(/(<([^>]+)>)/gi, "") : 'Untitled'}
                    </h2>
                  </div>
                  <div className="mt-2">
                    {/* Render content using dangerouslySetInnerHTML since it's rich HTML text */}
                    <div className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: post.content.slice(0, 200) + '...' }} />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 italic">By: {post.WriterName || 'Unknown'}</p>
                        <p className="text-sm text-gray-400">
                          Date: {new Date(post.createdAt.seconds * 1000).toLocaleString()}
                        </p>
                      </div>
                      <Link to={`/post/${post.id}`} className="text-teal-500 font-semibold hover:underline">Read more...</Link>
                    </div>
                  </div>
                </div>
                
                
                
                ))
              )}
              {/* Pagination */}
              {!loading && (
                <div className='mb-5'>
                  <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
                </div>
              )}
            </div>

            {/* Side Components */}
            <div className="w-full lg:w-2/5 space-y-6">
              <LazyRGHS />
              <TrendingProducts />
              <ProductNewsHindi />
              <TrendsTopic />
            </div>
          </div>

          {/* Products Section Header */}
          <div className="w-full lg:w-3/5 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-extrabold text-lg ml-5 mt-10 py-3 px-5 rounded-lg shadow-lg flex items-center">
            <i className="fas fa-shopping-cart text-yellow-300 mr-2 animate__animated animate__fadeIn"></i>
            <p>Products:</p>
          </div>
          <ProductsCarousel />

          {/* Product Categories Section Header */}
          <div className="w-full lg:w-3/5 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-extrabold text-lg ml-5 mt-10 py-3 px-5 rounded-lg shadow-lg flex items-center">
            <i className="fas fa-tags text-yellow-300 mr-2 animate__animated animate__fadeIn"></i>
            <p>Products' Categories:</p>
          </div>
          <ProductCateg />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
