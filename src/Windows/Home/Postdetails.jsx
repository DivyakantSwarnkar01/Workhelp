import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import firebase from '../LogSign/fbcon';
import Social from './Social';
import MetaTags from '../../Helmet/MetaTags';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { htmlToText } from 'html-to-text';
import Logo from '../../assets/logo.png'; 
import './PostDetails.css';

const Postdetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postDoc = doc(firebase.firestore, 'Blogs_Contents', postId);
        const docSnap = await getDoc(postDoc);
        if (docSnap.exists()) {
          setPost({
            id: docSnap.id,
            title: docSnap.data().title,
            content: docSnap.data().content,
            createdAt: docSnap.data().createdAt,
            thumbnail: docSnap.data().thumbnail,
            WriterName: docSnap.data().WriterName
          });
          fetchRandomPosts(); // Fetch random posts when the main post is fetched
        } else {
          console.log('No such document!');
          navigate('/NotFound');
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        navigate('/NotFound');
      }
    };

    fetchPost();
  }, [postId]);

  // Function to fetch random posts
  const fetchRandomPosts = async () => {
    try {
      const postsRef = collection(firebase.firestore, 'Blogs_Contents');
      const q = query(postsRef, orderBy('createdAt'), limit(10)); // Limit to a certain number of posts
      const querySnapshot = await getDocs(q);
      
      const allPosts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // Shuffle the posts and select a random subset
      const shuffledPosts = allPosts.sort(() => 0.5 - Math.random()).slice(0, 5); // Get 5 random posts
      setRelatedPosts(shuffledPosts);
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  };

  // Function to clean text for schema data (remove images and URLs)
  const cleanSchemaText = (text) => {
    if (typeof text !== 'string') return ''; // Ensure it's a string
    return text.replace(/data:image\/[a-zA-Z]+;base64,[^\s]+/g, '').replace(/https?:\/\/[^\s]+/g, '').replace(/www\.[^\s]+/g, '');
  };

  const extractImageFromTitle = (title) => {
    if (typeof title !== 'string') return { image: null, cleanedTitle: title };
    const match = title.match(/(data:image\/[a-zA-Z]+;base64,[^\s]+)/);
    const image = match ? match[0] : null; 
    const cleanedTitle = title.replace(/<[^>]+>/g, '').replace(/(data:image\/[a-zA-Z]+;base64,[^\s]+)$/, '').trim();
    return { image, cleanedTitle };
  };

  if (!post) return null;

  const filteredTitle = htmlToText(cleanSchemaText(post.title || ''));
  const filteredContent = htmlToText(cleanSchemaText(post.content || '')).replace(/<img[^>]*>/g, '');
  const slicedContent = cleanSchemaText(filteredContent.split(' ').slice(0, 50).join(' '));
  const thumbnailImage = extractImageFromTitle(post.title);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": filteredTitle,
    "description": cleanSchemaText(slicedContent),
    "datePublished": post.createdAt.toDate().toISOString(),
    "author": {
      "@type": "Person",
      "name": post.WriterName || "Author Name"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Workhelper News",
      "logo": {
        "@type": "ImageObject",
        "url": Logo
      }
    },
    "image": thumbnailImage.image || post.thumbnail || "https://www.example.com/default-thumbnail-url.jpg",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.workhelper.shop/post/${postId}`
    }
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = post.title;
    const shareText = encodeURIComponent(`${title}\n${url}`);

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${shareText}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50">
        <Helmet>
          <title>{filteredTitle}</title>
          <meta name="description" content={slicedContent} />
          <link rel="canonical" href={`https://www.workhelper.shop/post/${postId}`} />
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        </Helmet>

        {/* Main Container */}
        <main className="max-w-5xl mx-auto p-6">
          {/* Header Section */}
          <header className="bg-lime-600 text-white rounded-lg p-6 mb-8 shadow-lg">
            <h1 className="text-3xl md:text-5xl font-bold">{filteredTitle}</h1>
            <p className="mt-2 text-lg">Published on {post.createdAt.toDate().toLocaleString()} by {post.WriterName}</p>
          </header>

          {/* Content Section */}
          <article className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="text-gray-800 mb-4" dangerouslySetInnerHTML={{ __html: post.content }} />
            <div className="border-t border-gray-300 my-4"></div>

           {/* Social Share Section */}
<div className="flex justify-center mb-4 space-x-4">
  <button onClick={() => handleShare('facebook')} className="flex items-center space-x-2 bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition duration-300">
    <i className="fab fa-facebook h-5 w-5"></i>
    <span className="text-sm">Share on Facebook</span>
  </button>
  <button onClick={() => handleShare('twitter')} className="flex items-center space-x-2 bg-blue-400 text-white rounded-md px-4 py-2 hover:bg-blue-500 transition duration-300">
    <i className="fab fa-twitter h-5 w-5"></i>
    <span className="text-sm">Share on Twitter</span>
  </button>
  <button onClick={() => handleShare('linkedin')} className="flex items-center space-x-2 bg-blue-700 text-white rounded-md px-4 py-2 hover:bg-blue-800 transition duration-300">
    <i className="fab fa-linkedin h-5 w-5"></i>
    <span className="text-sm">Share on LinkedIn</span>
  </button>
           </div>

          </article>

          {/* Related Posts Section */}
          <aside className="bg-gray-100 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center text-lime-600">Related Posts</h2>
            <ul className="space-y-4">
              {relatedPosts.map((relatedPost) => (
                <li 
                  key={relatedPost.id} 
                  className="py-3 px-4 bg-white rounded-lg hover:bg-lime-600 transition-all duration-200 cursor-pointer shadow-md transform hover:-translate-y-1"
                  onClick={() => navigate(`/post/${relatedPost.id}`)} 
                >
                  <span className="text-lg font-semibold text-gray-800 hover:text-white">
                    {htmlToText(cleanSchemaText(relatedPost.title || ''))}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </main>
      </div>
    </HelmetProvider>
  );
};

export default Postdetails;
