import React, { useState, useEffect } from "react";
import NaviHome from "../naviHome";
import { db } from '../../../Model/DbCon.js';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { format } from 'date-fns';
import { HelmetProvider } from 'react-helmet-async';

const Environment = () => {
    const [worldPosts, setWorldPosts] = useState([]);

    useEffect(() => {
        // Query Firestore for posts with category Environment
        const postsRef = collection(db, 'Blogs_Contents');
        const q = query(postsRef, where('CategoryOfPost', '==', 'Environment'));

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
                <title>Environmental News & Updates - Workhelper</title>
                <meta name="description" content="Stay updated with the latest environmental news, eco-friendly practices, and discussions surrounding earth issues. Read insightful articles on environmental developments." />
                <link rel="canonical" href="https://www.workhelper.shop/Environment" />
            </HelmetProvider>
            <NaviHome />
            <div className="p-4 bg-white min-h-screen">
                {/* Top thin line */}
                <div className="border-t-2 border-gray-300 mb-4"></div>
                
                {/* Category Title */}
                <h1 className="text-4xl font-extrabold text-lime-700 mb-4 text-center tracking-wide">
                    Environment And Earth News
                </h1>
            
                {/* Articles */}
                <div className="space-y-4 flex flex-wrap justify-center">
                    {worldPosts.length === 0 && (
                        <p className="text-gray-500 text-center">Loading articles...</p>
                    )}
                    {worldPosts.map((post) => (
                        <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-2 mb-6 hover:shadow-xl transition-shadow">
                            <h2 className="text-2xl font-bold mb-2 text-gray-900 hover:text-lime-500 transition-colors" dangerouslySetInnerHTML={{ __html: post.title }} />
                            <p className="text-sm mb-2" dangerouslySetInnerHTML={{ __html: truncateContent(post.content) }} />
                            <div className="flex justify-between items-center text-gray-500 text-xs">
                                <div className="flex items-center">
                                    <i className="fas fa-calendar-alt mr-2 text-lime-500 animate-pulse"></i>
                                    <p>{`Date: ${format(new Date(post.createdAt.seconds * 1000), 'MMM dd, yyyy')}`}</p>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-user mr-2 text-lime-500 animate-bounce"></i>
                                    <p>{`Authored by: ${post.WriterName}`}</p>
                                </div>
                            </div>
                            {/* Thin lime color line between articles */}
                            <div className="border-t-2 border-lime-500 mt-4"></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Environment;
