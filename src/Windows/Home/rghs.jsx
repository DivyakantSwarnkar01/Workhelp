import React, { useState, useEffect } from "react";
import ExtractText from "./ExtractText.jsx";

function Rghs() {
    const [activePost, setActivePost] = useState("Top Rated Posts");
    const [loading, setLoading] = useState(true); // State to manage loading
    const posts = ["Top Rated Posts", "Recently Added Posts", "Upcoming Posts"]; // Array of posts

    // Simulate loading of posts (e.g., from an API)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulating a 1-second loading time

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col mt-10 ml-24 mr-10 h-auto w-96">
            {/* Relevant Posts Section */}
            <div className="bg-gradient-to-r from-lime-500 to-lime-700 p-4 mb-4 rounded-lg shadow-lg transition-shadow duration-300 animate__animated animate__fadeInUp">
                <h2 className="text-xl font-bold text-white mb-4 text-center shadow-md flex items-center justify-center">
                    <i className="fas fa-bullhorn text-yellow-300 mr-2"></i>
                    Relevant Posts
                </h2>
                {/* Post Buttons with Loading Animation */}
                <div className="flex justify-around bg-slate-200 rounded-md p-1 shadow-md animate__animated animate__fadeIn">
                    {loading ? (
                        <div className="flex items-center justify-center h-full w-full">
                            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-lime-600 border-b-2 border-gray-300"></div>
                        </div>
                    ) : (
                        posts.map((post) => (
                            <div
                                key={post}
                                onClick={() => setActivePost(post)}
                                className={`flex-grow text-center cursor-pointer p-3 rounded-lg transition-all duration-300 transform ${
                                    activePost === post
                                        ? "bg-lime-600 text-white font-bold scale-105 shadow-lg"
                                        : "bg-slate-200 text-gray-800 hover:bg-lime-400 hover:text-white shadow-md hover:scale-105"
                                }`}
                            >
                                <span className="flex items-center justify-center">
                                    {post === "Top Rated Posts" && <i className="fas fa-star text-yellow-400 mr-2"></i>}
                                    {post === "Recently Added Posts" && <i className="fas fa-clock text-blue-400 mr-2"></i>}
                                    {post === "Upcoming Posts" && <i className="fas fa-calendar-alt text-green-400 mr-2"></i>}
                                    <span className="font-semibold">{post}</span>
                                </span>
                            </div>
                        ))
                    )}
                </div>
                <div className="bg-gray-100 text-lg text-gray-800 mt-3 p-4 rounded-md shadow-inner transition-all duration-300">
                    {activePost === "Top Rated Posts" && <ExtractText />}
                    {activePost === "Recently Added Posts" && <p>No recent posts available.</p>}
                    {activePost === "Upcoming Posts" && <p>No upcoming posts available.</p>}
                </div>
            </div>

            {/* Advertisement and Notice Board Section */}
            <div className="bg-gradient-to-r from-lime-500 to-lime-700 p-4 mt-8 rounded-lg shadow-lg transition-shadow duration-300">
                <h2 className="text-lg text-white font-bold mb-4 text-center flex items-center justify-center">
                    <i className="fas fa-ad text-red-300 mr-2"></i>
                    Advertisement and Notice Board
                </h2>
                <div className="bg-green-200 p-4 rounded-md shadow-md transition-transform transform hover:scale-105 duration-300">
                    <a
                        href="https://amzn.to/3JogpKL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-800 font-semibold underline hover:text-green-700 transition-colors duration-300"
                    >
                        Check out this product!
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Rghs;
