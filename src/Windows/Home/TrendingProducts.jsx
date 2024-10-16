import React from "react";
import { db } from "../../Model/DbCon";
import RealDB from "./realtime-feeder/RealDB";

const TrendingProducts = () => {
    return (
        <div className="flex flex-col w-96 h-auto bg-gradient-to-r from-green-600 to-green-800 mt-32 ml-24 mr-10 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 animate__animated animate__fadeInUp">
            {/* Header with Icon and Title */}
            <div className="flex flex-row items-center p-4 bg-gradient-to-l from-green-800 to-green-600 rounded-t-md shadow-lg transition-all duration-500 hover:bg-green-700">
                <i className="fas fa-rocket text-yellow-400 text-3xl animate-bounce"></i>
                <p className="text-white font-bold text-2xl ml-3">Trending Products:</p>
            </div>
            {/* Content Box */}
            <div className="bg-green-500 text-slate-700 m-5 p-5 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 hover:bg-green-400">
                <RealDB />
            </div>
            {/* Bottom Glow Effect */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-b-md animate-pulse"></div>
        </div>
    );
};

export default TrendingProducts;
