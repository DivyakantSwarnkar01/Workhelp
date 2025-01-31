// DbCon.js
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';  // For Realtime Database
import { getStorage } from 'firebase/storage';    // For Firebase Storage

const firebaseConfig = {
   
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);  // Firestore
const realTimeDb = getDatabase(firebaseApp);  // Realtime Database
const storage = getStorage(firebaseApp);  // Firebase Storage

export { db, realTimeDb, storage };
