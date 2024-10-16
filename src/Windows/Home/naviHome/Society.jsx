import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import NaviHome from "../naviHome";
import { db } from '../../../Model/DbCon.js';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { format } from 'date-fns';
import { HelmetProvider } from 'react-helmet-async';

const Society = () => {
    const [worldPosts, setWorldPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Query Firestore for posts with category 'Society'
        const postsRef = collection(db, 'Blogs_Contents');
        const q = query(postsRef, where('CategoryOfPost', '==', 'Society'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const posts = [];
            snapshot.forEach((doc) => {
                posts.push({ id: doc.id, ...doc.data() });
            });
            setWorldPosts(posts);
            setIsLoading(false);
        });

        return () => {
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
                <title>Society News - Workhelper</title>
                <meta name="description" content="Stay informed with the latest society news, social issues, and stories shaping communities worldwide. Explore thought-provoking articles on human-interest topics." />
                <link rel="canonical" href="https://www.workhelper.shop/Society" />
            </HelmetProvider>
            <NaviHome />
            <div className="p-4 bg-gray-100 min-h-screen">

                {/* Top Line and Category Title */}
                <div className="border-t-4 border-lime-500 mb-8"></div>
                <h1 className="text-5xl font-extrabold text-center text-lime-800 mb-10">
                    Society & Human News
                </h1>

                {/* Loading Spinner */}
                {isLoading && (
                    <div className="flex justify-center">
                        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-6"></div>
                    </div>
                )}

                {/* Articles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
                    {worldPosts.map((post) => (
                        <div key={post.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h2 className="text-2xl font-bold mb-3 text-lime-700 hover:text-lime-900 transition-colors" dangerouslySetInnerHTML={{ __html: post.title }} />
                            <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: truncateContent(post.content) }} />
                            <div className="flex justify-between items-center text-gray-500 text-sm">
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-calendar-alt text-lime-600"></i>
                                    <p>{`Published: ${format(new Date(post.createdAt.seconds * 1000), 'MMM dd, yyyy')}`}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-user text-lime-600"></i>
                                    <p>{`Author: ${post.WriterName}`}</p>
                                </div>
                            </div>
                            {/* Call to Action with Link */}
                            <Link to={`/post/${post.id}`}>
                                <button className="w-full mt-6 py-2 text-white bg-lime-600 rounded-lg hover:bg-lime-700 focus:ring-4 focus:ring-lime-500 transition-colors duration-300">
                                    Read More
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom Line */}
                <div className="border-t-4 border-lime-500 mt-12"></div>
            </div>
        </>
    );
};

export default Society;
