import { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from './../../Model/DbCon.js';
import { htmlToText } from 'html-to-text'; // Import htmlToText function from 'html-to-text';

const ExtractText = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, 'Blogs_Contents'), orderBy('createdAt'), limit(5));
        const querySnapshot = await getDocs(q);

        const fetchedPosts = querySnapshot.docs.map(doc => {
          const postData = doc.data();
          const titleText = postData.title ? htmlToText(postData.title) : 'Untitled';
          return {
            id: doc.id,
            title: titleText,
            createdAt: postData.createdAt ? postData.createdAt.toDate().toLocaleString() : 'Unknown',
          };
        });
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div className='m-3 bg-slate-400 hover:z-20' key={post.id}>
          <h2 className= ' text-slate-100 text-sm'> {post.title}</h2>
          <p className='text-sm'> {post.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default ExtractText;
