import React from "react";
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'; 


const firebaseConfig = {
    apiKey: "AIzaSyAw7s53wOvlN_HKZDOc_5CiiDHDKwd5DJI",
    authDomain: "workhelper-261bf.firebaseapp.com",
    projectId: "workhelper-261bf",
    storageBucket: "workhelper-261bf.appspot.com",
    messagingSenderId: "359079196777",
    appId: "1:359079196777:web:c0f8603146e3e0ec724af8",
    measurementId: "G-YYEWCSKBRM",
    databaseURL: "https://workhelper-261bf-default-rtdb.asia-southeast1.firebasedatabase.app"
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

