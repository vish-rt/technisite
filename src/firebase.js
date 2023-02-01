import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlTusSqr-jJ9OD6XEdh6jbWoCsFz8hZ2M",
    authDomain: "social-media-fd71b.firebaseapp.com",
    projectId: "social-media-fd71b",
    storageBucket: "social-media-fd71b.appspot.com",
    messagingSenderId: "589065149434",
    appId: "1:589065149434:web:809c52427e2f2d467ea243",
    measurementId: "G-QQ5WW40H6N"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;