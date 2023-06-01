import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCWUF8woUW5sgglyA9waaZpSKrhPUKrbfY",
  authDomain: "movies-d35cf.firebaseapp.com",
  projectId: "movies-d35cf",
  storageBucket: "movies-d35cf.appspot.com",
  messagingSenderId: "6666885196",
  appId: "1:6666885196:web:d0129f9ac455071e7cfce9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)