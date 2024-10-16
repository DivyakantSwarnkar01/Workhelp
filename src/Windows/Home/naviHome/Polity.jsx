import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import NaviHome from "../naviHome";
import { db } from '../../../Model/DbCon.js';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { format } from 'date-fns';
import { HelmetProvider } from 'react-helmet-async';

const Polity = () => {
    const [worldPosts, setWorldPosts] = useState([]);

    useEffect(() => {
        const postsRef = collection(db, 'Blogs_Contents');
        const q = query(postsRef, where('CategoryOfPost', '==', 'Polity'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const posts = [];
            snapshot.forEach((doc) => {
                posts.push({ id: doc.id, ...doc.data() });
            });
            setWorldPosts(posts);
        });

        return () => unsubscribe();
    }, []);

    const truncateContent = (content) => {
        const words = content.split(' ');
        return words.length > 70 ? words.slice(0, 70).join(' ') + '...' : content;
    };

    return (
        <>
            <HelmetProvider>
                <title>Latest Politics News & Updates - Workhelper</title>
                <meta name="description" content="Stay updated with the latest political scenarios, news, and discussions. Read articles and insights on national and international political developments on Workhelper." />
                <link rel="canonical" href="https://www.workhelper.shop/Polity" />
            </HelmetProvider>

            <NaviHome />

            <div className="p-4 bg-white min-h-screen">
                <div className="border-t-4 border-lime-500 mb-6 w-32 mx-auto"></div>
                
                {/* Page Title */}
                <h1 className="text-4xl font-extrabold text-lime-700 mb-8 text-center tracking-wide">
                    Political Scenario & Updates
                </h1>

                <p className="text-center text-lg text-lime-600 mb-12">
                    Explore the most recent news, political trends, and discussions that shape the nation. Get real-time updates on the changing political climate, in-depth articles, and more.
                </p>

                <div className="space-y-6 flex flex-wrap justify-center">
                    {worldPosts.length === 0 && (
                        <p className="text-gray-500 text-center">Loading articles...</p>
                    )}
                    
                    {worldPosts.map((post) => (
                        <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-2 mb-6 hover:shadow-xl transition-shadow">
                            <h2 className="text-2xl font-bold mb-3 text-gray-900 hover:text-lime-500 transition-colors" dangerouslySetInnerHTML={{ __html: post.title }} />
                            
                            <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: truncateContent(post.content) }} />
                            
                            <div className="flex justify-between items-center text-gray-500 text-sm">
                                <div className="flex items-center">
                                    <i className="fas fa-calendar-alt mr-2 text-lime-500 animate-pulse"></i>
                                    <p>{format(new Date(post.createdAt.seconds * 1000), 'MMM dd, yyyy')}</p>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-user mr-2 text-lime-500 animate-bounce"></i>
                                    <p>{post.WriterName}</p>
                                </div>
                            </div>

                            {/* Call to Action with Link */}
                            <Link to={`/post/${post.id}`}>
                                <button className="w-full mt-4 py-2 text-white bg-lime-600 rounded-lg hover:bg-lime-700 focus:ring-4 focus:ring-lime-500 transition-colors duration-300">
                                    Read More
                                </button>
                            </Link>

                            <div className="border-t-2 border-lime-500 mt-4"></div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Polity;
