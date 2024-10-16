import React, { useState, useEffect } from "react";
import NaviHome from "../naviHome";
import { db } from '../../../Model/DbCon.js';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { format } from 'date-fns';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const World = () => {
    const [worldPosts, setWorldPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Firestore Query to fetch 'World' category posts
        const postsRef = collection(db, 'Blogs_Contents');
        const q = query(postsRef, where('CategoryOfPost', '==', 'World'));

        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const posts = [];
                snapshot.forEach((doc) => {
                    posts.push({ id: doc.id, ...doc.data() });
                });

                // Sort posts client-side from latest to oldest based on 'createdAt'
                const sortedPosts = posts.sort((a, b) => {
                    if (a.createdAt && b.createdAt) {
                        return b.createdAt.seconds - a.createdAt.seconds;
                    }
                    return 0;
                });

                setWorldPosts(sortedPosts);
                setLoading(false);
            },
            (err) => {
                console.error("Error fetching World posts:", err);
                setError("Failed to load World news.");
                setLoading(false);
            }
        );

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

    // Determine the featured post (latest)
    const featuredPost = worldPosts.length > 0 ? worldPosts[0] : null;
    const additionalPosts = worldPosts.length > 1 ? worldPosts.slice(1) : [];

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>World News - Workhelper</title>
                    <link rel="canonical" href="https://www.workhelper.shop/World" />
                    <meta name="description" content="Stay updated with the latest World News on Workhelper. Read articles sorted from latest to oldest." />
                </Helmet>
            </HelmetProvider>
            <div className='mt-1'>
            <NaviHome />
            </div>
            <div className="min-h-screen bg-lime-50">
                {/* Header Section */}
                <header className="bg-lime-700 py-6">
                    <div className="container mx-auto px-4">
                        {/* Decorative Lines */}
                        <div className="border-t-2 border-lime-300 mb-4"></div>
                        {/* Category Title */}
                        <h1 className="text-4xl font-extrabold text-white mb-4 text-center">
                            World News
                        </h1>
                        <div className="border-t-2 border-lime-300 mb-4"></div>
                    </div>
                </header>

                {/* Featured Article Section */}
                {featuredPost && (
                    <section className="container mx-auto px-4 py-8">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                            {/* Featured Content */}
                            <div className="md:w-2/3 p-4"> {/* Adjusted padding */}
                                <h2 className="text-2xl font-bold text-lime-700 mb-4"> {/* Decreased text size */}
                                    <a
                                        href={`/post/${featuredPost.id}`}
                                        className="hover:text-lime-600 transition-colors duration-200"
                                        dangerouslySetInnerHTML={{ __html: featuredPost.title }}
                                    />
                                </h2>
                                <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: truncateContent(featuredPost.content) }} />
                                <div className="flex items-center text-sm text-gray-500">
                                    <i className="fas fa-calendar-alt mr-1 text-lime-500" aria-hidden="true"></i>
                                    <span className="mr-4">
                                        {featuredPost.createdAt
                                            ? format(new Date(featuredPost.createdAt.seconds * 1000), 'MMM dd, yyyy')
                                            : 'Date not available'}
                                    </span>
                                    <i className="fas fa-user-alt mr-1 text-lime-500" aria-hidden="true"></i>
                                    <span>{`By: ${featuredPost.WriterName || 'Unknown'}`}</span>
                                </div>
                            </div>
                            {/* Optional Image or Placeholder */}
                            <div className="md:w-1/3 bg-lime-500 flex items-center justify-center">
                                <span className="text-white text-lg font-semibold">Featured</span>
                            </div>
                        </div>
                    </section>
                )}

                {/* Additional Articles Grid */}
                <section className="container mx-auto px-4 py-8">
                    {loading && (
                        <div className="flex justify-center items-center">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-lime-500"></div>
                        </div>
                    )}

                    {error && (
                        <div className="text-red-500 text-center">
                            {error}
                        </div>
                    )}

                    {!loading && !error && additionalPosts.length === 0 && (
                        <div className="text-center text-gray-700">
                            No additional World news available at the moment.
                        </div>
                    )}

                    {!loading && !error && additionalPosts.length > 0 && (
                        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {additionalPosts.map((post) => (
                                <article
                                    key={post.id}
                                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between"
                                >
                                    {/* Post Title */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-lime-700 mb-2">
                                            <a
                                                href={`/post/${post.id}`}
                                                className="hover:text-lime-600 transition-colors duration-200"
                                                dangerouslySetInnerHTML={{ __html: post.title }}
                                            />
                                        </h3>
                                        {/* Post Content */}
                                        <p
                                            className="text-gray-700 mb-4"
                                            dangerouslySetInnerHTML={{ __html: truncateContent(post.content) }}
                                        />
                                    </div>
                                    {/* Metadata */}
                                    <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                                        <div className="flex items-center">
                                            <i className="fas fa-calendar-alt mr-1 text-lime-500" aria-hidden="true"></i>
                                            <span>
                                                {post.createdAt
                                                    ? format(new Date(post.createdAt.seconds * 1000), 'MMM dd, yyyy')
                                                    : 'Date not available'}
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <i className="fas fa-user-alt mr-1 text-lime-500" aria-hidden="true"></i>
                                            <span>{`By: ${post.WriterName || 'Unknown'}`}</span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </>
    );
};

export default World;
