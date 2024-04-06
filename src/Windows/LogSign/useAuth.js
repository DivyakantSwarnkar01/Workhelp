import { useState, useEffect } from 'react';
import { auth } from './fbcon';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return { user }; // Make sure to return the user object
};

export default useAuth;
