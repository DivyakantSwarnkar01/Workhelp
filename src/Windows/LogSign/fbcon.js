import React from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'; 


const firebaseConfig = {
  
  };



  const app = initializeApp(firebaseConfig);
 
export const firestore = getFirestore(app);

export const auth = getAuth();

export const storage = getStorage(app);

const firebase = {
  app,
  firestore,
  auth,
  storage
};

export default firebase;

