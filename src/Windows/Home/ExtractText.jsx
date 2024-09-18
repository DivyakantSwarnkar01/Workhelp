import { useState, useEffect } from 'react';
import { collection, query, orderBy, getDocs, limit } from 'firebase/firestore';
import { db } from './../../Model/DbCon.js';
import { htmlToText } from 'html-to-text';

const ExtractText = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch documents and order by createdAt
        const q = query(collection(db, 'Blogs_Contents'), orderBy('createdAt'), limit(20));
        const querySnapshot = await getDocs(q);

        // Map the documents and remove <img> tags from title
        const fetchedPosts = querySnapshot.docs.map(doc => {
          const postData = doc.data();
          let titleHtml = postData.title || '';

          // Remove any <img> tags using regex
          titleHtml = titleHtml.replace(/<img[^>]*>/g, ''); 

          // Convert cleaned HTML to plain text
          const titleText = htmlToText(titleHtml);

          return {
            id: doc.id,
            title: titleText,
            createdAt: postData.createdAt ? postData.createdAt.toDate().toLocaleString() : 'Unknown',
          };
        });

        // Randomly select 5 posts
        const randomPosts = fetchedPosts.sort(() => 0.5 - Math.random()).slice(0, 5);
        setPosts(randomPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="w-full">
      {posts.map(post => (
        <div className='m-2 bg-slate-200 p-3 rounded-lg hover:bg-green-100 hover:shadow-md' key={post.id}>
          <h2 className='text-md font-semibold text-slate-700'>{post.title}</h2>
          <p className='text-sm text-gray-600'>Posted on: {post.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default ExtractText;
