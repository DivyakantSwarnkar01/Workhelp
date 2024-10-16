import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import NaviHome from "../naviHome";
import { db } from '../../../Model/DbCon.js';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { format } from 'date-fns';
import { HelmetProvider } from 'react-helmet-async';

const Countries = () => {
    const [worldPosts, setWorldPosts] = useState([]);

    useEffect(() => {
        // Query Firestore for posts with category 'International Affairs' or 'Countries'
        const postsRef = collection(db, 'Blogs_Contents');
        const q = query(postsRef, where('CategoryOfPost', 'in', ['Countries', 'International Affairs']));

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
                <title>International Affairs - Workhelper</title>
                <meta name="description" content="Stay updated with the latest news and articles on international affairs, global politics, and country-specific insights." />
                <link rel="canonical" href="https://www.workhelper.shop/Countries" />
            </HelmetProvider>
            <NaviHome />
            <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 min-h-screen">
                {/* Top thin line */}
                <div className="border-t-2 border-gray-300 mb-4"></div>
                
                {/* Category Title */}
                <h1 className="text-4xl font-extrabold text-lime-800 mb-6 text-center drop-shadow-lg">
                    International Affairs
                </h1>

                {/* Articles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
                    {worldPosts.map((post) => (
                        <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h2 className="text-2xl font-bold mb-2 text-lime-700 hover:text-lime-900 transition-colors" dangerouslySetInnerHTML={{ __html: post.title }} />
                            <p className="text-sm mb-4" dangerouslySetInnerHTML={{ __html: truncateContent(post.content) }} />
                            <div className="text-gray-500 text-xs mb-2">
                                <p>{`Published: ${format(new Date(post.createdAt.seconds * 1000), 'MMM dd, yyyy')}`}</p>
                                <p>{`Author: ${post.WriterName}`}</p>
                            </div>
                            {/* Call to Action with Link */}
                            <Link to={`/post/${post.id}`}>
                                <button className="w-full mt-4 py-2 text-white bg-lime-600 rounded-lg hover:bg-lime-700 focus:ring-4 focus:ring-lime-500 transition-colors duration-300">
                                    Read More
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

export default Countries;
