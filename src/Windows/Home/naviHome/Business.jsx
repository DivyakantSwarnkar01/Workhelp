import React, { useState, useEffect } from "react";
import NaviHome from "../naviHome";
import { db } from '../../../Model/DbCon.js';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { format } from 'date-fns';
import { HelmetProvider } from 'react-helmet-async';

const Business = () => {
    const [worldPosts, setWorldPosts] = useState([]);

    useEffect(() => {
        // Query Firestore for posts with category 'Business'
        const postsRef = collection(db, 'Blogs_Contents');
        const q = query(postsRef, where('CategoryOfPost', '==', 'Business'));

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
                <title>Business News - Workhelper</title>
                <meta name="description" content="Latest updates and insights from the business world." />
                <link rel="canonical" href="https://www.workhelper.shop/Business" />
            </HelmetProvider>
            <NaviHome />
            <div className="min-h-screen bg-gray-100 p-6">
                {/* Top thin line */}
                <div className="border-t-2 border-gray-300 mb-4"></div>
                
                {/* Category Title */}
                <h1 className="text-5xl font-extrabold text-lime-700 mb-8 text-center drop-shadow-lg">
                    Business World
                </h1>

                {/* Articles Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {worldPosts.map((post) => (
                        <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
                            <h2 className="text-2xl font-bold mb-2 text-lime-600 hover:text-lime-500 transition-colors duration-200" dangerouslySetInnerHTML={{ __html: post.title }} />
                            <p className="text-sm text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: truncateContent(post.content) }} />
                            <div className="text-gray-500 text-xs mb-2">
                                <p>{`Date: ${format(new Date(post.createdAt.seconds * 1000), 'MMM dd, yyyy')}`}</p>
                                <p>{`Authored by: ${post.WriterName}`}</p>
                            </div>
                            {/* Thin lime color line between articles */}
                            <div className="border-t-2 border-lime-500 my-4"></div>
                            <a href={`/post/${post.id}`} className="text-lime-700 font-semibold hover:underline">
                                Read More
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Business;
