import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { realTimeDb } from '../../../Model/DbCon.js'; // Import the realTimeDb instance from your DbCon.js

const RealDB = () => {
  const [data, setData] = useState(null); // State to hold the data fetched from Realtime Database
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    // Reference to the desired data node in the Realtime Database
    const dataRef = ref(realTimeDb, 'user/user1'); // Replace with your node path

    // Set up a listener to get the data and automatically update on changes
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const value = snapshot.val();
      setData(value);
      setLoading(false);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  return (
    <div>
      <h1>Realtime Data from Firebase</h1>
      {data ? (
        <div>
          <p>Hello world: {data['Data1']}</p>
          <p>How are you?: {data['Data2']}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default RealDB;
