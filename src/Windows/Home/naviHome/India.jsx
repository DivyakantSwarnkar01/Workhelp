import React, { useState, useEffect } from "react";
import NaviHome from "../naviHome";
import { db } from '../../../Model/DbCon.js';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { format } from 'date-fns';
import { HelmetProvider } from 'react-helmet-async';

const India = () => {
    const [worldPosts, setWorldPosts] = useState([]);

    useEffect(() => {
        // Query Firestore for posts with category 'India'
        const postsRef = collection(db, 'Blogs_Contents');
        const q = query(postsRef, where('CategoryOfPost', '==', 'India'));

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
                <title>India News - Workhelper</title>
                <link rel="canonical" href="https://www.workhelper.shop/Home/India" />
            </HelmetProvider>
            <NaviHome />
            <div className="p-4 bg-zinc-700">
                {/* Top thin line */}
                <div className="border-t-2 border-gray-300 mb-4"></div>
                
                {/* Category Title */}
                <h1 className="text-3xl font-bold text-white mb-4 text-center">
                    India News
                </h1>
            

                {/* Articles */}
                <div className="space-y-4 flex justify-center">
                    <div className="w-1/3">
                        {worldPosts.map((post) => (
                            <div key={post.id} className="bg-white p-4 rounded-lg shadow-lg mb-4">
                                <h2 className="text-2xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: post.title }} />
                                <p className="text-sm mb-2" dangerouslySetInnerHTML={{ __html: truncateContent(post.content) }} />
                                <div className="text-gray-500 text-xs">
                                    <p>{`Date: ${format(new Date(post.createdAt.seconds * 1000), 'MMM dd, yyyy')}`}</p>
                                    <p>{`Authored by: ${post.WriterName}`}</p>
                                </div>
                                {/* Thin lime color line between articles */}
                                <div className="border-t-2 border-lime-500 mt-4"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default India;
