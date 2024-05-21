import React, { useState, useEffect } from "react";
import NaviHome from "../naviHome";
import { db } from '../../../Model/DbCon.js';
import { collection } from "firebase/firestore";

const World = () => {
    const [worldPosts, setWorldPosts] = useState([]);

    useEffect(() => {
        // Query Firestore for posts with category 'World'
        const unsubscribe = collection(db, 'Blogs_Contents')
            .where('category', '==', 'World')
            .onSnapshot((snapshot) => {
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

    return (
        <>
            <NaviHome />
            <div>
                <div className="justify-centre  bg-zinc-700 h-96 w-auto">
                    <div className="flex mb-5 justify-center">
                        <div className="w-3/5 bg-white  ml-5 mt-5">
                            <h1>Hello World Page!!!</h1>
                            {/* Render worldPosts data here */}
                            {worldPosts.map((post) => (
                                <div key={post.id}>
                                    {/* Render each post */}
                                    <h2>{post.title}</h2>
                                    <p>{post.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default World;
