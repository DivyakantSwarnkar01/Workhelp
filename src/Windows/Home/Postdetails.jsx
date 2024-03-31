import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import firebase from "../LogSign/fbcon";





const Postdetails =  () => {


    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
                        const fetchPost = async () =>{
                            const postDoc = doc(firebase.firestore, 'Blogs_Contents', id);
                            const docSnap = await getDoc(postDoc);
                            if(docSnap.exists()){
                                setPost({ id: docSnap.id, content: docSnap.data().content});
                            } else {
                                console.log('No Such Documents!');
                            }
                        };
                        fetchPost();
                        }, [id]);

                        if (!post) return <div> Loading..... </div>;

                        return (
                            <div>
                                <h1> Full Article </h1>
                                <div dangerouslySetInnerHTML={{__html: post.content }} /> 
                                {/*  Here Quilljs Contents Will be displayed  */}
                            </div>
                        );
};

export default Postdetails;