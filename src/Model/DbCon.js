// DbCon.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAw7s53wOvlN_HKZDOc_5CiiDHDKwd5DJI",
    authDomain: "workhelper-261bf.firebaseapp.com",
    projectId: "workhelper-261bf",
    storageBucket: "workhelper-261bf.appspot.com",
    messagingSenderId: "359079196777",
    appId: "1:359079196777:web:c0f8603146e3e0ec724af8",
    measurementId: "G-YYEWCSKBRM"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
