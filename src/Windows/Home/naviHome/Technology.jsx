import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import NaviHome from "../naviHome";
import { db } from '../../../Model/DbCon.js';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { format } from 'date-fns';
import { HelmetProvider } from 'react-helmet-async';

const Technology = () => {
    const [worldPosts, setWorldPosts] = useState([]);

    useEffect(() => {
        // Query Firestore for posts with category Technology
        const postsRef = collection(db, 'Blogs_Contents');
        const q = query(postsRef, where('CategoryOfPost', '==', 'Technology'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const posts = [];
            snapshot.forEach((doc) => {
                posts.push({ id: doc.id, ...doc.data() });
            });
            setWorldPosts(posts);
        });

        return () => {
            // Unsubscribe from the Firestore listener when component unmounts
            unsubscribe();
        };
    }, []);

    // Function to truncate content to 70 words
    const truncateContent = (content) => {
        const words = content.split(' ');
        return words.length > 70 ? words.slice(0, 70).join(' ') + '...' : content;
    };

    return (
        <>
            <HelmetProvider>
                <title>Technology News - Workhelper</title>
                <meta name="description" content="Stay updated with the latest technology trends, gadgets, and innovations. Read articles and insights on emerging technologies and their impact on society." />
                <link rel="canonical" href="https://www.workhelper.shop/Technology" />
            </HelmetProvider>
            <NaviHome />
            <div className="p-4 bg-gradient-to-r from-green-500 to-green-700 min-h-screen">
                {/* Top thin line */}
                <div className="border-t-2 border-gray-300 mb-4"></div>
                
                {/* Category Title */}
                <h1 className="text-4xl font-bold text-lime-800 mb-4 text-center">
                    Technology News
                </h1>

                {/* Articles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {worldPosts.map((post) => (
                        <div 
                            key={post.id} 
                            className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
                        >
                            <h2 className="text-2xl font-bold mb-2 text-gray-800" dangerouslySetInnerHTML={{ __html: post.title }} />
                            <p className="text-sm text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: truncateContent(post.content) }} />
                            <div className="flex justify-between items-center text-gray-500 text-xs mb-2">
                                <div className="flex items-center">
                                    <i className="fas fa-calendar-alt mr-1"></i> {/* Calendar icon */}
                                    <p>{`Date: ${format(new Date(post.createdAt.seconds * 1000), 'MMM dd, yyyy')}`}</p>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-user mr-1"></i> {/* User icon */}
                                    <p>{`Authored by: ${post.WriterName}`}</p>
                                </div>
                            </div>
                            
                            {/* Icon for Read More */}
                            <Link to={`/post/${post.id}`}>
                                <button className="mt-4 w-full py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition-colors duration-300 flex items-center justify-center">
                                    <i className="fas fa-arrow-right mr-2"></i> {/* Font Awesome Icon */}
                                    Read More
                                </button>
                            </Link>

                            {/* Thin lime color line between articles */}
                            <div className="border-t-2 border-lime-500 mt-4"></div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Technology;
