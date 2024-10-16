import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import NaviHome from "../naviHome";
import { db } from '../../../Model/DbCon.js';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { format } from 'date-fns';
import { HelmetProvider } from 'react-helmet-async';

const Science = () => {
    const [worldPosts, setWorldPosts] = useState([]);

    useEffect(() => {
        // Query Firestore for posts with category 'Science'
        const postsRef = collection(db, 'Blogs_Contents');
        const q = query(postsRef, where('CategoryOfPost', '==', 'Science'));

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
                <title>Science Updates - Workhelper</title>
                <meta name="description" content="Explore the latest updates and breakthroughs in science, technology, and research." />
                <link rel="canonical" href="https://www.workhelper.shop/Science" />
            </HelmetProvider>
            <NaviHome />
            <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 min-h-screen">
                {/* Top thin line */}
                <div className="border-t-2 border-gray-300 mb-4"></div>
                
                {/* Category Title with Icon */}
                <h1 className="text-4xl font-extrabold text-lime-800 mb-6 text-center drop-shadow-lg">
                    <i className="fas fa-flask mr-2 animate-bounce" aria-hidden="true"></i>
                    Science Updates
                </h1>

                {/* Articles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
                    {worldPosts.map((post) => (
                        <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h2 className="text-2xl font-bold mb-2 text-lime-700 hover:text-lime-900 transition-colors" dangerouslySetInnerHTML={{ __html: post.title }} />
                            <p className="text-sm mb-4" dangerouslySetInnerHTML={{ __html: truncateContent(post.content) }} />
                            <div className="text-gray-500 text-xs mb-2 flex items-center">
                                <i className="fas fa-calendar-alt mr-1" aria-hidden="true"></i>
                                <p>{`Published: ${format(new Date(post.createdAt.seconds * 1000), 'MMM dd, yyyy')}`}</p>
                            </div>
                            <div className="text-gray-500 text-xs mb-2 flex items-center">
                                <i className="fas fa-user mr-1" aria-hidden="true"></i>
                                <p>{`Author: ${post.WriterName}`}</p>
                            </div>
                            {/* Call to Action with Link */}
                            <Link to={`/post/${post.id}`}>
                                <button className="w-full mt-4 py-2 text-white bg-lime-600 rounded-lg hover:bg-lime-700 focus:ring-4 focus:ring-lime-500 transition-colors duration-300 flex items-center justify-center">
                                    <i className="fas fa-arrow-right mr-2"></i> Read More
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom thin line */}
                <div className="border-t-2 border-gray-300 mt-6"></div>
            </div>
        </>
    );
};

export default Science;
