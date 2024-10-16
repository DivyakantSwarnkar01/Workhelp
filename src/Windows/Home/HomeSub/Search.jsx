import React, { useEffect, useState } from "react";
import { db } from '../../../Model/DbCon.js'; // Import the Firestore DB
import { collection, getDocs } from "firebase/firestore"; // Import Firestore methods
import { useLocation } from "react-router-dom";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('query');

    console.log("Search Query:", searchQuery); // Check the search query

    const fetchData = async () => {
      if (searchQuery) {
        const postsRef = collection(db, 'Blogs_Contents');
        
        // Fetch all documents
        const snapshot = await getDocs(postsRef);
        
        console.log("Snapshot Data:", snapshot.docs); // Log all fetched documents
        
        const results = snapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .filter(doc => doc.title && doc.title.includes(searchQuery)); // Ensure title exists and filter

        console.log("Filtered Results:", results); // Log filtered results

        setSearchResults(results);
      }
    };

    fetchData();
  }, [location.search]); // Refetch when query changes

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {searchResults.length > 0 ? (
        <div className="space-y-4">
          {searchResults.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold" dangerouslySetInnerHTML={{ __html: post.title }} />
              <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: post.content }} />
              <div className="text-gray-500 text-xs">
                <p>{`Authored by: ${post.WriterName}`}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Search;
