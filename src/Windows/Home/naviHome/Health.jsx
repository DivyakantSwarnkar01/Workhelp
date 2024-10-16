import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import NaviHome from "../naviHome";
import { db } from '../../../Model/DbCon.js';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { format } from 'date-fns';
import { HelmetProvider } from 'react-helmet-async';

const Health = () => {
    const [worldPosts, setWorldPosts] = useState([]);

    useEffect(() => {
        // Query Firestore for posts with category 'Health'
        const postsRef = collection(db, 'Blogs_Contents');
        const q = query(postsRef, where('CategoryOfPost', '==', 'Health'));

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
                <title>Health News - Workhelper</title>
                <link rel="canonical" href="https://www.workhelper.shop/Health" />
            </HelmetProvider>
            <NaviHome />
            <div className="p-6 bg-gradient-to-r from-green-500 to-blue-500 min-h-screen">
                {/* Top thin line */}
                <div className="border-t-2 border-gray-300 mb-4"></div>
                
                {/* Category Title */}
                <h1 className="text-4xl font-bold text-white mb-8 text-center drop-shadow-lg">
                    Health and Wellbeing
                </h1>

                {/* Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {worldPosts.map((post) => (
                        <div key={post.id} className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h2 className="text-xl font-semibold mb-2" dangerouslySetInnerHTML={{ __html: post.title }} />
                            <p className="text-sm mb-4" dangerouslySetInnerHTML={{ __html: truncateContent(post.content) }} />
                            <div className="flex items-center text-gray-500 text-xs mb-2">
                                <i className="fas fa-calendar-alt glow text-lime-600 mr-2 animate-pulse"></i>
                                <span>{`Date: ${format(new Date(post.createdAt.seconds * 1000), 'MMM dd, yyyy')}`}</span>
                            </div>
                            <div className="flex items-center text-gray-500 text-xs">
                                <i className="fas fa-user text-lime-600 mr-2"></i>
                                <span>{`Authored by: ${post.WriterName}`}</span>
                            </div>
                            {/* Call to Action */}
                            <Link to={`/post/${post.id}`}>
                                <button className="w-full mt-4 py-2 text-white bg-lime-600 rounded-lg hover:bg-lime-700 transition-colors duration-300">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Health;
