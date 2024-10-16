import React, { Suspense } from "react";
import { Link } from "react-router-dom";

function SubHeader() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="relative bg-lime-500 w-full h-36">
                <ul className="flex justify-around items-end absolute bottom-0 w-full p-4">
                    {[
                        { path: "/", label: "Hello !!!", icon: "fa-home" },
                        { path: "/Recent", label: "Recent", icon: "fa-clock" },
                        { path: "/NewBlogs", label: "New Blogs", icon: "fa-pencil-alt" },
                        { path: "/Quaries?", label: "Quaries?", icon: "fa-question-circle" },
                        { path: "/Search", label: "Search", icon: "fa-search" },
                        { path: "/LogSign/Log_Sign", label: "Authenticate", icon: "fa-user" },
                    ].map((link, index) => (
                        <li key={index} className="flex">
                            <Link
                                to={link.path}
                                className="flex justify-center items-center h-12 w-36 bg-green-800 text-white font-bold rounded-lg transition duration-300 ease-in-out transform hover:bg-green-700 hover:scale-105 shadow-lg hover:shadow-xl"
                                style={{
                                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                                }}
                            >
                                <i className={`fas ${link.icon} mr-2`}></i> {/* Font Awesome icon */}
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Suspense>
    );
}

export default SubHeader;
